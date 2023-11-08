"use client";

import Link from "next/link";
import React, { useState } from "react";

function PackageList({ data, header }: { data: any[]; header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className="w-full mt-[23.54px] lg:mt-[30px] lg:w-[70vw]">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {packageInfos.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageId}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px] text-center">
                  <div>{packageInfo.packageId}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px] text-center">
                  <div>{packageInfo.alamatPengirim}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[18.5px] text-[10px] lg:text-[20px] text-center">
                  <div>{packageInfo.statusPengiriman}</div>
                </td>
                <td className="w-auto h-auto py-[18.5px] align-middle items-end">
                  <Link
                    onClick={() => handleClick(packageInfo)}
                    href={`/package-detail/${packageInfo.packageId}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[10px] justify-center bg-[#BC6161]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[18px]">
                      Check
                    </h6>
                  </Link>
                </td>
                <td className="w-auto h-auto py-[18.5px]"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PackageList;

export const packageInfos = [
  {
    packageId: "abc123",
    namaPelanggan: "Customer A",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-10",
    statusPengiriman: "shipped",
    hasUpdateStatus: true,
    report: "Delivered on time",
    proofOfDelivery: "https://example.com/delivery-proof/abc123.jpg",
    stafPengirim: 1,
  },
  {
    packageId: "def456",
    namaPelanggan: "Customer B",
    alamatPengirim: "456 Pine St, City, Country",
    noTelp: "555-987-6543",
    jenisBunga: "Tulips",
    catatanPelanggan: "Handle with care",
    tanggalPengiriman: "2023-11-12",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 2,
  },
  {
    packageId: "ghi789",
    namaPelanggan: "Customer C",
    alamatPengirim: "789 Elm St, City, Country",
    noTelp: "555-555-5555",
    jenisBunga: "Lilies",
    catatanPelanggan: "Handle with care",
    tanggalPengiriman: "2023-11-14",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 3,
  },
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-16",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 4,
  },
];