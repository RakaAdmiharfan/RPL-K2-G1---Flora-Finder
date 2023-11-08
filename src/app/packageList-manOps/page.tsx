"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
// import Search from "./components/search";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import PackageList from "./components/packageList";
// import axios from "axios";

export default function packageMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataProperties, setDataProperties] = useState<any>([]);

  const filteredProperties = dataProperties.filter((property: any) =>
    property.nama_properti.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman

  // Hitung jumlah halaman
  //   const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Filter properti berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //   const displayedProperties = properties.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const response = await axios.get("http://159.223.92.164:8080/api/v1/properti");
    //   setDataProperties(response.data.propertiGetAllProperti);
    // } catch (error) {
    //   console.error("Terjadi kesalahan:", error);
    // }
  };

  return (
    <div className="bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      <nav>
        <SideNav />
      </nav>

      <h2 className="text-[#3D688E] text-center font-montserrat font-semibold text-[24px] mt-[0px] lg:text-[48px] lg:mt-[70px] lg:mb-6 justify-center">
        Delivery Staff List
      </h2>

      <div className="ml-[280px]">
        <div className="max-h-[600px] overflow-y-auto no-scrollbar">
          <PackageList
            data={filteredProperties}
            header={[
              "ID",
              "Nama Pelanggan",
              "Alamat",
              "Status",
              "Check Problem",
              "Package Detail",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
