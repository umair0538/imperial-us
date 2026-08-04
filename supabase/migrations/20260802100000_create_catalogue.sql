create type public.product_type as enum ('watch', 'sunglasses', 'belt');
create type public.media_kind as enum ('image', 'video');

create table public.collections (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]+$'),
  name text not null,
  title text not null,
  subtitle text not null,
  description text not null,
  hero_image text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  collection_id uuid not null references public.collections(id) on delete restrict,
  slug text not null unique check (slug ~ '^[a-z0-9-]+$'),
  name text not null,
  description text not null,
  product_type public.product_type not null,
  price_amount integer not null check (price_amount >= 0),
  currency char(3) not null default 'PKR' check (currency = upper(currency)),
  thumbnail_path text not null,
  specifications jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.product_media (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  kind public.media_kind not null,
  path text not null,
  thumbnail_path text,
  position integer not null default 0 check (position >= 0),
  alt_text text not null,
  unique (product_id, kind, position)
);

create index products_active_collection_idx on public.products (collection_id, slug) where is_active;
create index product_media_product_position_idx on public.product_media (product_id, kind, position);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger collections_set_updated_at before update on public.collections for each row execute function public.set_updated_at();
create trigger products_set_updated_at before update on public.products for each row execute function public.set_updated_at();

alter table public.collections enable row level security;
alter table public.products enable row level security;
alter table public.product_media enable row level security;

create policy "Active collections are publicly readable" on public.collections for select using (is_active);
create policy "Active products are publicly readable" on public.products for select using (is_active);
create policy "Media for active products is publicly readable" on public.product_media for select using (exists (select 1 from public.products where products.id = product_media.product_id and products.is_active));
