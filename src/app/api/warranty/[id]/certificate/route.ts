import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

import { WarrantyService } from "@/lib/services/warranty.service";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new NextResponse(
      "Unauthorized",
      {
        status: 401,
      }
    );
  }

  const {
    data: warranty,
  } =
    await WarrantyService.getWarrantyCertificate(
      user.id,
      id
    );

  // Generate PDF here

  return new NextResponse();
}