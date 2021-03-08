import { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { connect } from "react-redux";

import { Header } from "blocks/Header";
import { Container } from "bases/Container";
import { Tabs } from "blocks/Tabs";
import { ArticleSection } from "sections/ArticleSection";

import { fetchArticles, ArticlesData } from "redux/actions/articleAction";
import { openTab as _openTab } from "redux/actions/tabAction";
import { ArticlesState } from "redux/reducers/articleReducer";
import { TabsState } from "redux/reducers/tabReducer";

const Main = styled.main`
  background-color: #ededed;
`;

const mockData = {
  id: 100270,
  name: "TOP",
  source: 0,
  type: 0,
  order: 0,
  templates: [
    {
      id: "56_-1",
      type: 56,
      sections: [
        {
          type: 41,
          articles: [
            {
              id: -1,
              source: "AD",
              publishTimeUnix: 0,
              type: 0,
              adOn: false,
              adRatio: { lap: 0, dfp: 100 },
              lazyLoadingOn: false,
              lazyLoadingBuffer: 200,
            },
          ],
        },
      ],
    },
    {
      id: "50",
      type: 50,
      sections: [
        {
          type: 1,
          articles: [
            {
              id: 111489713,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "News",
              categoryId: 100271,
              title:
                "Kronologi Cekcok Pimpinan KPK Nawawi Pomolango dan Putra Amien Rais di Pesawat Versi KPK",
              publisher: "Kompas.com",
              publisherId: "100014",
              publisherImageCdnHash: "http://www.kompas.com/",
              badgeText: "",
              publishTimeUnix: 1597412738000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL",
                quality: 0,
              },
              url: {
                hash: "JqnNqJ",
                url:
                  "https://today.line.me/id/article/Kronologi+Cekcok+Pimpinan+KPK+Nawawi+Pomolango+dan+Putra+Amien+Rais+di+Pesawat+Versi+KPK-JqnNqJ",
              },
              type: 0,
              postId: "111489713",
            },
            {
              id: 111491258,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "News",
              categoryId: 100271,
              title:
                " Polisi Tahan Dua Tersangka Perdagangan Orang Kapal Cina ",
              publisher: "Tempo.co",
              publisherId: "100023",
              publisherImageCdnHash: "http://www.tempo.co/",
              badgeText: "",
              publishTimeUnix: 1597413900000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hlrzJIfHHM11HMxoM1ktMCn1lMDJ0XyBeIwViQxddbWk9AXMDKVYoaGs0OG9rVHQDKQV4PWEzKGw4BXdZeVUr",
                quality: 0,
              },
              url: {
                hash: "X8Ro6l",
                url:
                  "https://today.line.me/id/article/Polisi+Tahan+Dua+Tersangka+Perdagangan+Orang+Kapal+Cina-X8Ro6l",
              },
              type: 0,
              postId: "111491258",
            },
            {
              id: 111487032,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "8 Momen Ulang Tahun Salmafina Sunan, Rayakan Bareng Keluarga - Dapat Buket Uang Dari Pacar",
              publisher: "KapanLagi.com",
              publisherId: "100024",
              publisherImageCdnHash: "www.kapanlagi.com",
              badgeText: "",
              publishTimeUnix: 1597410360000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hTPQ9mzrPC39sQCIu8WV0KFYWCBBfLBh8CHZaYTwuVUsWckshUSBHEU9HXU9AdUwhAnJMG0tJEE4Tdk96ViFH",
              },
              url: {
                hash: "W8ROEJ",
                url:
                  "https://today.line.me/id/article/8+Momen+Ulang+Tahun+Salmafina+Sunan+Rayakan+Bareng+Keluarga+Dapat+Buket+Uang+Dari+Pacar-W8ROEJ",
              },
              type: 0,
              postId: "111487032",
            },
            {
              id: 111476278,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Koleksi Barang Mewah Luna Maya, Harganya Lebih dari 1 Miliar!",
              publisher: "POPBELA.com",
              publisherId: "100035",
              publisherImageCdnHash: "http://www.popbela.com/",
              badgeText: "",
              publishTimeUnix: 1597416360000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hnAV_lO9IMW5rJhg_EidOOVFwMgFYSiJtDxBgcDtIb1oRFHE-UkR5AEggPVgVEHYwBUh5CkwnKl8UEHUwBEV5",
                quality: 0,
              },
              url: {
                hash: "0V5N72",
                url:
                  "https://today.line.me/id/article/Koleksi+Barang+Mewah+Luna+Maya+Harganya+Lebih+dari+1+Miliar-0V5N72",
              },
              type: 0,
              postId: "111476278",
              ageLimit: false,
            },
            {
              id: 111490423,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "Dita Karang Kencan Virtual Bersama Hansol Jang, Netizen: Medok Banget Woi!",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1597411929056,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h7GtomDasaGhJFkE53bgXP3NAawd6entrLSA5dhl4NlwzJCg2fScvBmoQZQtlcS82J3glCGkRc1k2ICxsdCQv",
                quality: 0,
              },
              url: {
                hash: "n8ReXJ",
                url:
                  "https://today.line.me/id/article/Dita+Karang+Kencan+Virtual+Bersama+Hansol+Jang+Netizen+Medok+Banget+Woi-n8ReXJ",
              },
              type: 0,
              postId: "111490423",
            },
            {
              id: 111450154,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Sports",
              categoryId: 100609,
              title: "Mampukah Lewandowski Lewati Rekor Messi dan Ronaldo?",
              publisher: "LINE TODAY Sports",
              publisherId: "101966",
              badgeText: "",
              publishTimeUnix: 1597393800000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hUdUDhNDYCktoPSMaWlR1HFJrCSRbURlIDAtbVThTVH8SD0ofA1kRekpoVH9CD00VAF1NL04-EXoXC04aU1gR",
              },
              url: {
                hash: "k8RQ02",
                url:
                  "https://today.line.me/id/article/Mampukah+Lewandowski+Lewati+Rekor+Messi+dan+Ronaldo-k8RQ02",
              },
              type: 0,
              postId: "111450154",
              ageLimit: false,
            },
            {
              id: 111462712,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "10 OOTD Motif ala Putri Diana Biar Gayamu Stylish dan Gak Monoton",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1597403760000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0ht-UZZUStKwJoIwJTPUtUVVJ1KG1bTzgBDBV6HDhNdTYSEWtQXUczN0QmJTsSE2xcBhZtYk8lMDMXFW9SA0Yz",
                quality: 0,
              },
              url: {
                hash: "Qql7B3",
                url:
                  "https://today.line.me/id/article/10+OOTD+Motif+ala+Putri+Diana+Biar+Gayamu+Stylish+dan+Gak+Monoton-Qql7B3",
              },
              type: 0,
              postId: "111462712",
              ageLimit: false,
            },
            {
              id: 111492387,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Inspirasi Outfit 17an, Tampil Kece di Hari Kemerdekaan Meski di Rumah Aja dengan Ragam Busana Ini",
              publisher: "Tribun Style",
              publisherId: "100117",
              publisherImageCdnHash: "http://style.tribunnews.com/",
              badgeText: "",
              publishTimeUnix: 1597416660000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCyr5NxXEHFZPTDUH4tRjAXUaHzl8IA9VK3pNSB8iQmI1flxQcngEOGxKQm8weFsIIXlbM2xLB2cwelhSdXkE",
                quality: 0,
              },
              url: {
                hash: "z28LND",
                url:
                  "https://today.line.me/id/article/Inspirasi+Outfit+17an+Tampil+Kece+di+Hari+Kemerdekaan+Meski+di+Rumah+Aja+dengan+Ragam+Busana+Ini-z28LND",
              },
              type: 0,
              postId: "111492387",
              ageLimit: false,
            },
            {
              id: 111439494,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                'Viral Utas Warganet "Pakaian Wanita Berhijab Terbaik", Simak Daftarnya!',
              publisher: "Suara.com",
              publisherId: "100025",
              publisherImageCdnHash: "http://www.suara.com/",
              badgeText: "",
              publishTimeUnix: 1597382078000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0ho69-uOZeMBkEVBlIIJhPTj4CM3Y3OCMaYGJhB1Q6bi1-ZnBMMDosLChRPS95NndHbTJ3fShWKyh7YnRLOTss",
                quality: 0,
              },
              url: {
                hash: "Gqw2rP",
                url:
                  "https://today.line.me/id/article/Viral+Utas+Warganet+Pakaian+Wanita+Berhijab+Terbaik+Simak+Daftarnya-Gqw2rP",
              },
              type: 0,
              postId: "111439494",
            },
            {
              id: 107592511,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Kenakan Outfit Sama 8 Kali, Adu Gaya Joy Red Velvet Vs Jennie BLACKPINK",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597393380000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hWCb47FspCGxfTSE9G8t3O2UbCwNsIRtvO3tZcg8jVlglf0g_a35GXXxKVlUheE8yYCJACn1LE10ge0w8YnlH",
                quality: 0,
              },
              url: {
                hash: "2VBwVe",
                url:
                  "https://today.line.me/id/article/Kenakan+Outfit+Sama+8+Kali+Adu+Gaya+Joy+Red+Velvet+Vs+Jennie+BLACKPINK-2VBwVe",
              },
              type: 0,
              postId: "107592511",
              ageLimit: false,
            },
          ],
          rankingCount: 0,
        },
        {
          type: 3,
          articles: [
            {
              id: 111484563,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "News",
              categoryId: 100271,
              title:
                "Mumtaz Rais ke Pimpinan KPK saat Ditegur Pakai HP di Pesawat: Kamu Siapa?",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1597409341848,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hcje7L6H_PEVYThUU3JRDEmIYPyprIi9GPHhtWwggYnEifHwabCEmcHQZaiV3fnsbNn9zJ3lLJ3QneHhAZS4m",
                quality: 0,
              },
              url: {
                hash: "j8Rpy3",
                url:
                  "https://today.line.me/id/article/Mumtaz+Rais+ke+Pimpinan+KPK+saat+Ditegur+Pakai+HP+di+Pesawat+Kamu+Siapa-j8Rpy3",
              },
              type: 0,
              postId: "111484563",
            },
            {
              id: 111487036,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "7 Seleb Ini Punya Wajah yang Imut Banget dan Kini Kekar Macho Abis, Ada Chicco Jeriko - Randy Pangalila",
              publisher: "KapanLagi.com",
              publisherId: "100024",
              publisherImageCdnHash: "www.kapanlagi.com",
              badgeText: "",
              publishTimeUnix: 1597410900000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h39edlIJmbBZYHUVHxT4TQWJLb3lrcX8VPCs9CAhzMiIiLyxIZX0meHseYSZzfStINi8rdX4UdycnKygTYnwm",
              },
              url: {
                hash: "R8q2ee",
                url:
                  "https://today.line.me/id/article/7+Seleb+Ini+Punya+Wajah+yang+Imut+Banget+dan+Kini+Kekar+Macho+Abis+Ada+Chicco+Jeriko+Randy+Pangalila-R8q2ee",
              },
              type: 0,
              postId: "111487036",
            },
            {
              id: 111488398,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Pakai Bubuk Besi hingga Kemenyan, Ini 10 Mitos Perawatan Kecantikan Cleopatra",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1597411800791,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h1Bi0vR_vbm1USUc8y-gROm4fbQJnJX1uMH8_cwQnMFkuey4za3gmA3cdZFx9fykzOnglAnhMdVwrfypoYHsm",
                quality: 0,
              },
              url: {
                hash: "k8R1x0",
                url:
                  "https://today.line.me/id/article/Pakai+Bubuk+Besi+hingga+Kemenyan+Ini+10+Mitos+Perawatan+Kecantikan+Cleopatra-k8R1x0",
              },
              type: 0,
              postId: "111488398",
            },
          ],
          rankingCount: 0,
        },
      ],
    },
    {
      id: "73",
      title: "BERITA PILIHAN UNTUKMU",
      type: 73,
      sections: [
        {
          type: 4,
          articles: [],
          meta: { articlesPerPage: 8, readMoreButton: 0 },
        },
      ],
      meta: {
        personalizedTitle: "BERITA PILIHAN UNTUKMU",
        displayUserName: true,
        categoryId: 100270,
      },
    },
    {
      id: "56_0",
      type: 56,
      sections: [
        {
          type: 10,
          articles: [
            {
              id: 0,
              source: "AD",
              publishTimeUnix: 0,
              type: 0,
              adOn: true,
              adRatio: { lap: 0, dfp: 100 },
              lazyLoadingOn: false,
              lazyLoadingBuffer: 200,
            },
          ],
        },
      ],
    },
    {
      id: "58_0",
      type: 58,
      sections: [
        {
          type: 12,
          articles: [
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Videos",
              categoryId: 100472,
              publishTimeUnix: 0,
              type: 0,
            },
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Trending",
              categoryId: 100665,
              publishTimeUnix: 0,
              type: 0,
            },
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              publishTimeUnix: 0,
              type: 0,
            },
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Regional",
              categoryId: 100641,
              publishTimeUnix: 0,
              type: 0,
            },
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Sports",
              categoryId: 100609,
              publishTimeUnix: 0,
              type: 0,
            },
            {
              id: 0,
              source: "CATABLE",
              categoryName: "Story",
              categoryId: 100584,
              publishTimeUnix: 0,
              type: 0,
            },
          ],
        },
      ],
    },
    {
      id: "56_1",
      type: 56,
      sections: [
        {
          type: 10,
          articles: [
            {
              id: 1,
              source: "AD",
              publishTimeUnix: 0,
              type: 0,
              adOn: true,
              adRatio: { lap: 0, dfp: 100 },
              lazyLoadingOn: false,
              lazyLoadingBuffer: 200,
            },
          ],
        },
      ],
    },
    {
      id: "59_0",
      layoutId: 642877,
      title: "Viral di Medsos",
      type: 59,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 111403235,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title:
                "Viral Boneka Tenaga Medis dan Pasien Corona di Pinggir Jalan, Warga Kaget: Kaya Asli",
              publisher: "Tribunnews.com",
              publisherId: "100105",
              publisherImageCdnHash: "http://www.tribunnews.com/",
              badgeText: "",
              publishTimeUnix: 1597372920000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hRB-cslsADW0QGiQ_obNyOipMDgIjdh5udCxcc0B0U1lqKE5ofisWWDxIWlU0f0ozfitBCDcbFlxvLEpvLigW",
                quality: 0,
              },
              url: {
                hash: "EZOWYO",
                url:
                  "https://today.line.me/id/article/Viral+Boneka+Tenaga+Medis+dan+Pasien+Corona+di+Pinggir+Jalan+Warga+Kaget+Kaya+Asli-EZOWYO",
              },
              type: 0,
              postId: "111403235",
              ageLimit: false,
            },
            {
              id: 111381381,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title:
                "Viral di Medsos, Video Pramugari Ungkap Senioritas di Dunia Penerbangan",
              publisher: "Tribun Travel",
              publisherId: "100118",
              publisherImageCdnHash: "http://travel.tribunnews.com/",
              badgeText: "",
              publishTimeUnix: 1597373040000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hEbZ2RZtqGk1nSzMfXvFlGkwdGSJUJwlOA31LeUZIE3kZLFwHDi9dfF5JQykZZw1MUyVJK0FMTX0acwhJWytcK0oZFHtOeVxeWn9TK0YYESg",
              },
              url: {
                hash: "p9KzKe",
                url:
                  "https://today.line.me/id/article/Viral+di+Medsos+Video+Pramugari+Ungkap+Senioritas+di+Dunia+Penerbangan-p9KzKe",
              },
              type: 0,
              postId: "111381381",
              ageLimit: false,
            },
            {
              id: 111375801,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title:
                "Cerita di Balik Viral Video Anak Kecil Naik Pesawat Sendiri, Ingin Kunjungi sang Ayah di Rumah Sakit",
              publisher: "Tribunewow",
              publisherId: "100631",
              publisherImageCdnHash: "Tribunewow.com",
              badgeText: "",
              publishTimeUnix: 1597373400000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h1IOMHwjTbmZyNEc0WbURMUhibQlBWH1lFgI_eCJaMFIIBi0zSQcmU15jNlYNUSk4HAYkA18wdVcNAik1GwAm",
                quality: 0,
              },
              url: {
                hash: "9qv5kE",
                url:
                  "https://today.line.me/id/article/Cerita+di+Balik+Viral+Video+Anak+Kecil+Naik+Pesawat+Sendiri+Ingin+Kunjungi+sang+Ayah+di+Rumah+Sakit-9qv5kE",
              },
              type: 0,
              postId: "111375801",
              ageLimit: false,
            },
            {
              id: 111358748,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title:
                "Viral Soal Kalkulus Pakai Bahasa Jawa, Netizen: Auto Mumet",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1597313460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hF7TB36ZrGRhpOzBKZ5ZmT1NtGndaVwobDQ1IBjlVRywTCVpPVwoGdko_QSxGXF5GBwpefUQyAikWDV5NBQkG",
              },
              url: {
                hash: "vMa5K3",
                url:
                  "https://today.line.me/id/article/Viral+Soal+Kalkulus+Pakai+Bahasa+Jawa+Netizen+Auto+Mumet-vMa5K3",
              },
              type: 0,
              postId: "111358748",
              ageLimit: false,
            },
            {
              id: 111355986,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title:
                "Viral Petugas Medis Banjir Keringat saat Buka Baju Hazmat, Cairannya Sampai Basahi Lantai",
              publisher: "INDOZONE.ID Regional",
              publisherId: "102011",
              badgeText: "",
              publishTimeUnix: 1597309080000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hZTB7dhLSBXt_Tiwpcwl6LEUYBhRMIhZ4G3hUZS8gW08FfEYsQyhLFVxNDElVLkIlEX1IFFlLHkoAeEIuSilL",
                quality: 0,
              },
              url: {
                hash: "xYWqLG",
                url:
                  "https://today.line.me/id/article/Viral+Petugas+Medis+Banjir+Keringat+saat+Buka+Baju+Hazmat+Cairannya+Sampai+Basahi+Lantai-xYWqLG",
              },
              type: 0,
              postId: "111355986",
              ageLimit: false,
            },
            {
              id: 111349604,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title: "Goyang Dangdut Upin Ipin Viral, Warganet Malaysia Protes",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1597305480000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hPgpt6tLrD0hNDSYbs_lwH3dbDCd-YRxLKTteVh1jUXw3P01JcztCfWEFAnFpaUgWJGtEKG0MFHkyO0geIWNC",
                quality: 0,
              },
              url: {
                hash: "vMaw5E",
                url:
                  "https://today.line.me/id/article/Goyang+Dangdut+Upin+Ipin+Viral+Warganet+Malaysia+Protes+Terlalu+Mesum-vMaw5E",
              },
              type: 0,
              postId: "111349604",
              ageLimit: false,
            },
          ],
          rankingCount: 0,
        },
      ],
    },
    {
      id: "59_1",
      layoutId: 642877,
      title: "Highlights",
      type: 59,
      sections: [
        {
          type: 11,
          articles: [
            {
              id: 112270243,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Sinopsis Mudik, Tayang Ekslusif pada 28 Agustus di Mola TV",
              publisher: "Kompas.com",
              publisherId: "100014",
              publisherImageCdnHash: "http://www.kompas.com/",
              badgeText: "",
              publishTimeUnix: 1598252569000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hfFHuoNDDOWl1DBBNHthGPk9aOgZGYCpqETpodyViZ10POXw4TmN0XFkINV9Za343HGpwDFcPIlgKOik2HGx0",
                quality: 0,
              },
              url: {
                hash: "z2REp6",
                url:
                  "https://today.line.me/id/article/Sinopsis+Mudik+Tayang+Ekslusif+pada+28+Agustus+di+Mola+TV-z2REp6",
              },
              type: 0,
              postId: "112270243",
            },
            {
              id: 111448359,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "[Cooking & Baking] Ternyata Dalgona Coffee Terinspirasi dari Dalgona Candy!",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597390260000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCP_ncrOjHH9iFzUuVWBjKFhBHxBRew98BiFNYTJ5QksYJVwrDnJSTkBERBtLJ1shCnVXGUMfB04dIVguXnFS",
              },
              url: {
                hash: "6qLGVX",
                url:
                  "https://today.line.me/id/article/Cooking+Baking+Ternyata+Dalgona+Coffee+Terinspirasi+dari+Dalgona+Candy-6qLGVX",
              },
              type: 0,
              postId: "111448359",
              ageLimit: false,
            },
            {
              id: 111362328,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title: "Tips Cara Potong Rambut di Rumah di Masa Pandemi",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597287600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hlZ1RKACVM3UMKxonBHJMIjZ9MBo_RyB2aB1ia1xFbUF2GXAiNEwoRC5_ahIpTnQrZEp5EygvKERzHXQgYxoo",
                quality: 0,
              },
              url: {
                hash: "BqJ1B2",
                url:
                  "https://today.line.me/id/article/Tips+Cara+Potong+Rambut+di+Rumah+di+Masa+Pandemi-BqJ1B2",
              },
              type: 0,
              postId: "111362328",
              ageLimit: false,
            },
            {
              id: 111318763,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "[Cooking & Baking] Bikin Sendiri Kue Cubit Lumer Coklat untuk Cemilan-Mu!",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597288680000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hF4BfBk-5GRt_HzBIwilmTEVJGnRMcwoYGylIBS9xRy8FLVseQn5WKl0bEyNQfV5FF3xefVgcAioAKV8YRX1W",
                quality: 0,
              },
              url: {
                hash: "j8vx2z",
                url:
                  "https://today.line.me/id/article/Cooking+Baking+Bikin+Sendiri+Kue+Cubit+Lumer+Coklat+untuk+Cemilan+Mu-j8vx2z",
              },
              type: 0,
              postId: "111318763",
              ageLimit: false,
            },
            {
              id: 111244733,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "Jadwal Berantakan? Coba Tren #PlanWithMe yang Bikin Produktif",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597201200000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hW6r_adyrCBlPJiFNOJF3TnVwC3Z8ShsaKxBZBx9IVi01FE1JIxRGKGxxVisyH09HcEhPemIlEygwERgfcxVG",
                quality: 0,
              },
              url: {
                hash: "8qqxkZ",
                url:
                  "https://today.line.me/id/article/Jadwal+Berantakan+Coba+Tren+PlanWithMe+yang+Bikin+Produktif-8qqxkZ",
              },
              type: 0,
              postId: "111244733",
              ageLimit: false,
            },
            {
              id: 111225722,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "[Cooking & Baking] Resep Mudah Bikin Coffee Bun atau Roti Boy Sendiri di Rumah!",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597205760000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hoSr76tejMHxPThkoLlBPK3YYMxN8IiN_K3hhYh8gbkg1fHUtIS13TW1KPhkxenciJyx6HG8Lbx5lKX8ocSA",
                quality: 0,
              },
              url: {
                hash: "NRRy9Z",
                url:
                  "https://today.line.me/id/article/Cooking+Baking+Resep+Mudah+Bikin+Coffee+Bun+atau+Roti+Boy+Sendiri+di+Rumah-NRRy9Z",
              },
              type: 0,
              postId: "111225722",
              ageLimit: false,
            },
            {
              id: 111115659,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "[Cooking & Baking] Resep Cake Jelita yang Lagi Hits Banget!",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597114440000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hpCyKZ02WL2xEMgY5Tg5QO35kLAN3XjxvIAR-chRccVg-AGs7flMzXWYxc19uAmgyLFJnD2Q2NF07BTw5LFAz",
              },
              url: {
                hash: "6qP8va",
                url:
                  "https://today.line.me/id/article/Cooking+Baking+Resep+Cake+Jelita+yang+Lagi+Hits+Banget-6qP8va",
              },
              type: 0,
              postId: "111115659",
              ageLimit: false,
            },
            {
              id: 111147925,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title: "Tren Kopi Susu Seliter, Yuk Buat di Rumah Biar Hemat",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597114800000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hA5bQPUlLHhpfKDdPGE9hTWV-HXVsRA0ZOx5PBA9GQC4lGlpJM0xQK3wpFy0iT1lEYB1YeXshBSsgHw1KY01Q",
                quality: 0,
              },
              url: {
                hash: "yk2x6Q",
                url:
                  "https://today.line.me/id/article/Tren+Kopi+Susu+Seliter+Yuk+Buat+di+Rumah+Biar+Hemat-yk2x6Q",
              },
              type: 0,
              postId: "111147925",
              ageLimit: false,
            },
            {
              id: 111441607,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "Hobbies",
              categoryId: 100673,
              title:
                "Tips Potong Rambut Mudah di Rumah untuk Wanita, Anti Gagal",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1597374000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h95xWinVgZhpFLk9LYFIZTX94ZXV2QnUZIRg3BBVAOC4_HCZPcEt5K2YubSlqSiFELU0vdWcnfSs6GCJJLkh6",
                quality: 0,
              },
              url: {
                hash: "Mq76zz",
                url:
                  "https://today.line.me/id/article/Tips+Potong+Rambut+Mudah+di+Rumah+untuk+Wanita+Anti+Gagal-Mq76zz",
              },
              type: 0,
              postId: "111441607",
              ageLimit: false,
            },
          ],
          rankingCount: 0,
        },
      ],
    },
    {
      id: "6_100270",
      type: 6,
      sections: [
        {
          type: 6,
          articles: [
            {
              id: 131595185,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "Kaesang Mengaku Sudah Akhiri Hubungan dengan Felicia: Aku Dimaki-maki",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1615178620099,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hUtkFTe5yCltWPxx598V1DGxpCTRlUxlYMglbRQZRVGx6CkldOAkQaHdoVDt-X00FP1pFO3Q7EWouBk1YaFEQ",
              },
              url: {
                hash: "axqXK8",
                url: "https://today.line.me/id/article/axqXK8",
              },
              viewCount: 64974,
              commentCount: 115,
              likeCount: 35,
              type: 0,
            },
            {
              id: 131478979,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Polisi Bakal Periksa Kejiwaan Gadis Pembunuh Selebgram Makassar",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615129140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hw2L6TCf3KB1xTz45tw9XSkgZK3JCIzseFXl5AyEhdipdem0ZHilhLlBNIn9dLW9DH3lhfF0Kd3haKDhITC8",
              },
              url: {
                hash: "Emn5e2",
                url: "https://today.line.me/id/article/Emn5e2",
              },
              viewCount: 3736,
              commentCount: 34,
              likeCount: 21,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131535222,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Biz",
              categoryId: 100602,
              title:
                " Kemenkeu: Utang Bambang Trihatmodjo Terus Ditagih Sampai Selesai ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615117080000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hKdaaPzF4FEtcGAJo64trHGZOFyRvdAdIOC5FVQx2SnxwLVZOMCxeeH1LHSlzKFMVMitfKnseD3okIVJJYC1e",
              },
              url: {
                hash: "N7Wlz1",
                url: "https://today.line.me/id/article/N7Wlz1",
              },
              viewCount: 3041,
              commentCount: 61,
              likeCount: 39,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131581006,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "News",
              categoryId: 100271,
              title:
                " Video Boneka Buaya jadi Sarang Ular, Pas Dibongkar Isinya Banyak Banget ",
              publisher: "Merdeka.com",
              publisherId: "100021",
              badgeText: "",
              publishTimeUnix: 1615170751000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h7GgIOQ68aGhaMH5KxwgXP2BmawdpXHtrPgY5dgpeNl92BSs2Z1FwW3tgM19wBi82NAIlCHk5c1kiCS9tYFJw",
              },
              url: {
                hash: "GjDqoy",
                url: "https://today.line.me/id/article/GjDqoy",
              },
              viewCount: 2253,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131583011,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Pengakuan Meghan Markle yang Mengejutkan, dari Pernikahan Rahasia hingga Dibuat Menangis Kate Middleton",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615172460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hFK_sH6ZSGWRiCg9G-hBmM1hcGgtRZgpnBjxIejJkR1NOP1o6WmkDV0MCQ1NHPV46DD5SAUAMAlUaM15hDG4D",
              },
              url: {
                hash: "28g3EX",
                url: "https://today.line.me/id/article/28g3EX",
              },
              viewCount: 1730,
              commentCount: 4,
              likeCount: 2,
              type: 0,
            },
            {
              id: 131579863,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Trending",
              categoryId: 100665,
              title: "Viral, Foto Kaesang-Felicia dan Nadya di Singapura",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615171140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hsaKZEv8YLE52Izps9XFTGUx1LyFFTz9NEhV9UCZNcnlaFm8RHkRnfVdxIndYQGsQH0ZqKlQqN38OGmtLTxJn",
              },
              url: {
                hash: "jx65xr",
                url: "https://today.line.me/id/article/jx65xr",
              },
              viewCount: 1697,
              commentCount: 11,
              likeCount: 1,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131580940,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Dean Henderson Layak Jadi Penjaga Gawang Utama Manchester United",
              publisher: "bola.net",
              publisherId: "100076",
              badgeText: "",
              publishTimeUnix: 1615171529198,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hxuPqOtVlJ1ptCDF48AVYDVdeJDVeZDRZCT52RD1meW1BPWQEUGo4bE5ce2lEPmAEAz5uNEwPPGsVMWBfV2s4",
              },
              url: {
                hash: "DO80LV",
                url: "https://today.line.me/id/article/DO80LV",
              },
              viewCount: 294,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131591681,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Momen lucu ketika cuci piring ini bikin pengen bantu sambil nyengir",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615176060000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hGdQnR-vtGEtsFw5pxOBnHFZBGyRfewtICCFJVTx5RnxAIltNVCFWeE1HRnpIdV8VAiFUKE4XA3oULl9PAnlW",
              },
              url: {
                hash: "px8MBe",
                url: "https://today.line.me/id/article/px8MBe",
              },
              viewCount: 238,
              commentCount: 0,
              likeCount: 1,
              type: 0,
            },
            {
              id: 131564172,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Belasan Lubang Besar Muncul, Ribuan Penduduk Takut Ditelan Bumi",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615158179000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCDWH3RhrHGtqMQpJOwhjPFNnHwRZXQ9oDgdNdTpfQlxGBF85BFAHXUliF18QUVs1BAJWDEt0Qw5OAVI_UgM",
              },
              url: {
                hash: "BXG0Vj",
                url: "https://today.line.me/id/article/BXG0Vj",
              },
              viewCount: 162,
              commentCount: 1,
              likeCount: 2,
              type: 0,
            },
            {
              id: 131592688,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Ramalan Zodiak Minggu Ini: Aries Bersinar dan Gemini Harus Berbagi",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615176600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hODUPo6pTEGtoKQZJwsJvPFJ_EwRbRQNoDB9BdThHTlxEHFNtUhwNXUsrGlpFEFc1BhtXDE8uC1oQEFdvAB8N",
              },
              url: {
                hash: "PB0ByR",
                url: "https://today.line.me/id/article/PB0ByR",
              },
              viewCount: 99,
              commentCount: 0,
              likeCount: 0,
              type: 0,
              ageLimit: false,
            },
          ],
        },
      ],
      meta: { categoryName: "TOP", categoryId: 100270 },
    },
    {
      id: "63_5",
      title: "SHOWBIZ",
      type: 63,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131513279,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title: "10 Teori Penggemar yang Tidak Terjadi di WandaVision!",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1615098600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hePsCfBN3On9OOixcNeFFKHRsORB9Vil8KgxrYR5UZEhiD3gvdVUnTG9obEkzDH0hIFRwG208IU42A3whJ1on",
              },
              url: {
                hash: "EmnqDR",
                url: "https://today.line.me/id/article/EmnqDR",
              },
              viewCount: 32,
              commentCount: 1,
              likeCount: 1,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131592728,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "Meghan Markle Sebut Kerajaan Inggris Takut Putranya Berkulit Gelap",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615177406000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hHsO5IjK6F1xyTAF-2NxoC0gaFDNBIARfFnpGQiIiSWteeVRaSHheb1NLHjheLFACHHlYMlJMDG0KdVBYGnle",
              },
              url: {
                hash: "BXGXOj",
                url: "https://today.line.me/id/article/BXGXOj",
              },
              viewCount: 6361,
              commentCount: 8,
              likeCount: 5,
              type: 0,
            },
            {
              id: 131537318,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "Putus dengan Felicia Tissue, Sahabat Kaesang Pangarep: Kamu Telah Membuat Kesalahan Terbesar Dalam Hidup Kamu",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615118400000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hWcevPORWCExYDx5vlK93G2JZCyNrYxtPPDlZUghhVnt0OkpIZD5Bf3kHUyslNk8SNjpPK3sPE30gNk5ObT1B",
              },
              url: {
                hash: "rxG8qX",
                url: "https://today.line.me/id/article/rxG8qX",
              },
              viewCount: 9911,
              commentCount: 143,
              likeCount: 57,
              type: 0,
            },
            {
              id: 131538141,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title: "Mantan Kaesang Trending, Ini Profil Keluarga Felicia",
              publisher: "rri.co.id",
              publisherId: "102124",
              badgeText: "",
              publishTimeUnix: 1615118400000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hB_h1sO9-HXBVSAtTm6BiJ2weHh9mJA5zMX5MbgUmQ0d5fV90a30FRnZMQRR_KlouOyZUH3gNQhVxeQ52OXk",
              },
              url: {
                hash: "axqalP",
                url: "https://today.line.me/id/article/axqalP",
              },
              viewCount: 8131,
              commentCount: 53,
              likeCount: 21,
              type: 0,
            },
            {
              id: 131511579,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Music",
              categoryId: 100634,
              title: "Selly and Friends Selalu Tampil All Out",
              publisher: "Radar Semarang",
              publisherId: "101589",
              badgeText: "",
              publishTimeUnix: 1615122094000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hc1II2XLpPB50MCo9FjBDSU5mP3FHXC8dEAZtACReYilYBX5PH1J1KFdkZisNA3tAGl56elI5Jy8MCXpAT1N1",
              },
              url: {
                hash: "EmnKQQ",
                url: "https://today.line.me/id/article/EmnKQQ",
              },
              viewCount: 1,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131595185,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Showbiz",
              categoryId: 100272,
              title:
                "Kaesang Mengaku Sudah Akhiri Hubungan dengan Felicia: Aku Dimaki-maki",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1615178620099,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hUtkFTe5yCltWPxx598V1DGxpCTRlUxlYMglbRQZRVGx6CkldOAkQaHdoVDt-X00FP1pFO3Q7EWouBk1YaFEQ",
              },
              url: {
                hash: "axqXK8",
                url: "https://today.line.me/id/article/axqXK8",
              },
              viewCount: 64974,
              commentCount: 115,
              likeCount: 35,
              type: 0,
            },
          ],
        },
      ],
    },
    {
      id: "63_14",
      title: "LIFE",
      type: 63,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131592688,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Ramalan Zodiak Minggu Ini: Aries Bersinar dan Gemini Harus Berbagi",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615176600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hODUPo6pTEGtoKQZJwsJvPFJ_EwRbRQNoDB9BdThHTlxEHFNtUhwNXUsrGlpFEFc1BhtXDE8uC1oQEFdvAB8N",
              },
              url: {
                hash: "PB0ByR",
                url: "https://today.line.me/id/article/PB0ByR",
              },
              viewCount: 99,
              commentCount: 0,
              likeCount: 0,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131582646,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                " Koleksi Gelang Nagita Slavina Jadi Sorotan, Ada yang Harganya Setengah Miliar Rupiah ",
              publisher: "Stylo.id",
              publisherId: "100999",
              badgeText: "",
              publishTimeUnix: 1615174140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hmO1lDcFBMmAMFSRClERNNzZDMQ8_eSFjaCNjflx7bFcgIHE-NHJ6Uy1FOwR2cHU-YiN0Di8SKVF0LHVlYyR6",
              },
              url: {
                hash: "1WgMpM",
                url: "https://today.line.me/id/article/1WgMpM",
              },
              viewCount: 328,
              commentCount: 0,
              likeCount: 0,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131589265,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Kakak Felicia Tissue Angkat Bicara, Derryl: Kaesang Minta Restu Berkali-kali, Melamar di Bulan Desember 2020",
              publisher: "HerStory",
              publisherId: "102032",
              badgeText: "",
              publishTimeUnix: 1615176000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hmgi-1tqcMkhUVCRq-_ZNH24CMSdnOCFLMGJjVgQ6bH94YXFOa2V5fncBO3B8ZHUWOmd-L3ZdKXksbXVMYGZ5",
              },
              url: {
                hash: "gxyp8a",
                url: "https://today.line.me/id/article/gxyp8a",
              },
              viewCount: 643,
              commentCount: 3,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131583011,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Pengakuan Meghan Markle yang Mengejutkan, dari Pernikahan Rahasia hingga Dibuat Menangis Kate Middleton",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615172460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hFK_sH6ZSGWRiCg9G-hBmM1hcGgtRZgpnBjxIejJkR1NOP1o6WmkDV0MCQ1NHPV46DD5SAUAMAlUaM15hDG4D",
              },
              url: {
                hash: "28g3EX",
                url: "https://today.line.me/id/article/28g3EX",
              },
              viewCount: 1730,
              commentCount: 4,
              likeCount: 2,
              type: 0,
            },
            {
              id: 131591937,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Meghan Markle dalam Wawancara Oprah: Kate Middleton yang Membuat Saya Menangis",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1615176889062,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h_qjXD9r8AF5XIRZ8_8x_CW13AzFkTRNdMxdRQAdPXml7FENYbxQfbXYjDDp6GEcAORdKOHAiG28vGEdaORcf",
              },
              url: {
                hash: "px8xel",
                url: "https://today.line.me/id/article/px8xel",
              },
              viewCount: 711,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131565839,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Life",
              categoryId: 100274,
              title:
                "Foto Bareng Nadya Arifta, Tatapan Mata Kosong Bungsu Presiden Jokowi Disorot Warganet!",
              publisher: "HerStory",
              publisherId: "102032",
              badgeText: "",
              publishTimeUnix: 1615160100000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h_239Ft5zAB0OQBY_YE9_SjQWA3I9LBMeanZRA14uXioidUNMMCJGKy0SXCUqeUdDZydIfSpIGyx2eUdCYiNG",
              },
              url: {
                hash: "Kne8PN",
                url: "https://today.line.me/id/article/Kne8PN",
              },
              viewCount: 365,
              commentCount: 16,
              likeCount: 2,
              type: 0,
            },
          ],
        },
      ],
    },
    {
      id: "59_2",
      layoutId: 642877,
      title: "Rekomendasi Film & Drama",
      logo: {
        type: "IMAGE",
        hash:
          "0hv0lRNxujKR9RKwHn-oNWSGt9KnBiRzocNR14AQFFdysoEzkZahoxLnJ5cid-HW5BbktufXUrMi4vTj0bOBkx",
        play: 0,
      },
      type: 59,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 111364535,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "6 KDrama Inspiratif yang Membahas Pentingnya Memiliki Support System",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "New",
              publishTimeUnix: 1597312500000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hNmS-lxh0EUJuVDgQbKVuFVQCEi1dOAJBCmJAXD46T3YUZlIVBWJZd0IBHHoQY1YcBzJWJ05XCnMRYlYWVTpZ",
                quality: 0,
              },
              url: {
                hash: "EZOvgR",
                url:
                  "https://today.line.me/id/article/6+KDrama+Inspiratif+yang+Membahas+Pentingnya+Memiliki+Support+System-EZOvgR",
              },
              type: 0,
              postId: "111364535",
              ageLimit: false,
            },
            {
              id: 111262642,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Film Horor Seram di Tahun 2019 yang Mungkin Kamu Lewatkan, Penuh Teror!",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "New",
              publishTimeUnix: 1597230540000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hSxIl__p8DFd0FSUDxN9zAE5DDzhHeR9UECNdSSR7UmMOJ0lSHXsWOVcXVTMMI0sJGiNLOVcTF2YLIhxVTXoW",
                quality: 0,
              },
              url: {
                hash: "xYreln",
                url:
                  "https://today.line.me/id/article/5+Film+Horor+Seram+di+Tahun+2019+yang+Mungkin+Kamu+Lewatkan+Penuh+Teror-xYreln",
              },
              type: 0,
              postId: "111262642",
              ageLimit: false,
            },
            {
              id: 111358478,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "7 Rekomendasi Serial Orisinal Netflix yang Seru untuk Akhir Pekan!",
              publisher: "Duniaku.com",
              publisherId: "100132",
              publisherImageCdnHash: "http://www.duniaku.net/",
              badgeText: "New",
              publishTimeUnix: 1597309200000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hB4ZgMbnwHRtnHjRJaZxiTF1IHnRUcg4YAyhMBTdwQy8dLF5MWS1WLktMQHlKflpFCXBSf0cWBioYKFpOCypW",
                quality: 0,
              },
              url: {
                hash: "0V7Bzn",
                url:
                  "https://today.line.me/id/article/7+Rekomendasi+Serial+Orisinal+Netflix+yang+Seru+untuk+Akhir+Pekan-0V7Bzn",
              },
              type: 0,
              postId: "111358478",
              ageLimit: false,
            },
            {
              id: 111296924,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Drama Korea Romantis Populer yang Akhir Ceritanya Sedih Banget",
              publisher: "Haibunda",
              publisherId: "101062",
              publisherImageCdnHash: "https://haibunda.com/",
              badgeText: "Hot",
              publishTimeUnix: 1597258800000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hKx7YbaBBFFcKID0EOT1rADB2Fzg5TAdUbhZFSVpOSmNwElYDYkMLOSkgGmcgF1MJZBNbNSskD2Z1FlIGMkQL",
                quality: 0,
              },
              url: {
                hash: "V8X2q2",
                url:
                  "https://today.line.me/id/article/5+Drama+Korea+Romantis+Populer+yang+Akhir+Ceritanya+Sedih+Banget-V8X2q2",
              },
              type: 0,
              postId: "111296924",
              ageLimit: false,
            },
            {
              id: 111191122,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title: "Rekomendasi 5 Film India Terbaik Sepanjang Masa",
              publisher: "Okezone.com",
              publisherId: "100184",
              publisherImageCdnHash: "http://okezone.com/",
              badgeText: "Hot",
              publishTimeUnix: 1597155120000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hPDPF7CWoD2ttPyY-1PdwPFdpDAReUxxoCQledT1RUV8XDUtuVFEXBU43VAlCWkg1BFhCBUo9FFoSCBxoAlAX",
                quality: 0,
              },
              url: {
                hash: "NRR9p8",
                url:
                  "https://today.line.me/id/article/Rekomendasi+5+Film+India+Terbaik+Sepanjang+Masa-NRR9p8",
              },
              type: 0,
              postId: "111191122",
              ageLimit: false,
            },
            {
              id: 111247137,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Drama Korea Bergenre Action-Comedy, Pasti Bikin Kamu Terbahak-bahak!",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "Hot",
              publishTimeUnix: 1597216680000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hfUoCoXzVOXpSOhAuwg1GLWhsOhVhVip5NgxoZAJUZ04oCHwkO1t3T344M0ssCH4kO19xFXY7IkstDSl-a1h3",
                quality: 0,
              },
              url: {
                hash: "p99y2e",
                url:
                  "https://today.line.me/id/article/5+Drama+Korea+Bergenre+Action+Comedy+Pasti+Bikin+Kamu+Terbahak+bahak-p99y2e",
              },
              type: 0,
              postId: "111247137",
              ageLimit: false,
            },
          ],
          rankingCount: 0,
        },
      ],
    },
    {
      id: "86",
      type: 86,
      sections: [
        {
          type: 86,
          articles: [
            {
              id: 111388705,
              source: "POLL",
              title:
                "#BoyfriendLook Oppa Battle, Top Aktor Korea yang Jadi Idola Semua Orang!",
              publishTimeUnix: 0,
              type: 0,
              description:
                "Nama Lee Minho, Ji Chang Wook, dan Lee Seunggi sudah akrab bagi pecinta drama Korea. Di luar lokasi syuting, siapa yang gayanya paling kece?",
              pollPeriod: {
                startTimeUnix: 1597366800000,
                endTimeUnix: 1597511100000,
              },
              optionDisplayOrdering: "OrderByOptions",
              options: {
                "0": {
                  label:
                    "Ji Chang Wook, dengan wajah tampan dan kemampuan akting yang membuat betah menonton drama Korea",
                  color: "BLUE",
                  votes: 1397,
                },
                "1": {
                  label:
                    "Lee Min Ho, idola semua orang, enggak pernah bosan menunggu aksinya di layar kaca",
                  color: "BLUE",
                  votes: 1837,
                },
                "2": {
                  label:
                    "Lee Seung Gi, aktor serba bisa yang multitalenta, jagoan di drama, musik, hingga variety show",
                  color: "BLUE",
                  votes: 853,
                },
              },
              hash: "oPK7WW",
              image: {
                cdnHash:
                  "0hOehwsRGkEEpVDjkYFGdvHW9YEyVmYgNJMThBVAVgTn4vPFMZO2oLe3cKGi4qblcUPW9dL3IMC3sqOFcaa2sL",
                cdnUrl:
                  "https://obs.line-scdn.net/0hOehwsRGkEEpVDjkYFGdvHW9YEyVmYgNJMThBVAVgTn4vPFMZO2oLe3cKGi4qblcUPW9dL3IMC3sqOFcaa2sL",
              },
            },
          ],
        },
      ],
    },
    {
      id: "63_10",
      title: "LOCAL NEWS",
      type: 63,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131522537,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Hendak Berhubungan Seks dengan PSK di Pagi Hari, Seorang Kakek Tewas Telanjang",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615106168000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hct2k_gf9PFsPEip4kNNDDDVEPzQ8fi9YayRtRV98YmwjJ34FMHx0bSxBazglKnsFYSZ1PyoaJ2p3K3peO310",
              },
              url: {
                hash: "pxvYLw",
                url: "https://today.line.me/id/article/pxvYLw",
              },
              viewCount: 208,
              commentCount: 15,
              likeCount: 3,
              type: 0,
            },
            {
              id: 131513195,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Istri AHY Posting 'Kami Percaya Presiden Jokowi', Netizen: Hari Gini Masih Percaya",
              publisher: "INDOZONE.ID Regional",
              publisherId: "102011",
              badgeText: "",
              publishTimeUnix: 1615099152000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0ha1ynGkntPh5EFyg9PwZBSX5BPXF3ey0dICFvABR5YCloInxOf3R2KGcWZ35sL3lALXFyf2gQJS88LnhALXN2",
              },
              url: {
                hash: "MzD9eM",
                url: "https://today.line.me/id/article/MzD9eM",
              },
              viewCount: 230,
              commentCount: 10,
              likeCount: 3,
              type: 0,
            },
            {
              id: 131580827,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Asyik Mabuk dan Nyanyi Dipangkuan Purel Seksi, Residivis Ini Diringkus Usai Curi Motor",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615171575000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hRgNFHcGVDUhzPxtq7ltyH0lpDidAUx5LFwlcViNRU39fCk4WTltAe1I3BCgMBkoWHQpKJ1Y3FnkLBkpNSVpA",
              },
              url: {
                hash: "exk8EG",
                url: "https://today.line.me/id/article/exk8EG",
              },
              viewCount: 158,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131512754,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Bikin Deg-Deg-Serr, Ada Penampakan Wanita Berbaju Putih di Hutan Tinjomoyo",
              publisher: "Radar Semarang",
              publisherId: "101589",
              badgeText: "",
              publishTimeUnix: 1615123771000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hbtUCI7EfPVtoOit4EWNCDFJsPjRbVi5YDAxsRThUY2xED38LUV0mbUtuN28XA3oFBgl1OUgyJmoQA3sFBAsm",
              },
              url: {
                hash: "kzlqk0",
                url: "https://today.line.me/id/article/kzlqk0",
              },
              viewCount: 138,
              commentCount: 0,
              likeCount: 1,
              type: 0,
            },
            {
              id: 131478979,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Polisi Bakal Periksa Kejiwaan Gadis Pembunuh Selebgram Makassar",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615129140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hw2L6TCf3KB1xTz45tw9XSkgZK3JCIzseFXl5AyEhdipdem0ZHilhLlBNIn9dLW9DH3lhfF0Kd3haKDhITC8",
              },
              url: {
                hash: "Emn5e2",
                url: "https://today.line.me/id/article/Emn5e2",
              },
              viewCount: 3736,
              commentCount: 34,
              likeCount: 21,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131531397,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Kesal Ibu Selingkuh saat Ayah Sakit, Pemuda di Bangkalan Madura Bunuh Selingkuhan Ibunya",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615113491000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h7xDYyN5naFd5IH502sgXAEN2azhKTHtUHRY5SSlONmBVFSpRERVwYVoiNm5XFy8JEEckNVUmc2YBGS5UQRZw",
              },
              url: {
                hash: "YxlqpL",
                url: "https://today.line.me/id/article/YxlqpL",
              },
              viewCount: 242,
              commentCount: 10,
              likeCount: 3,
              type: 0,
            },
          ],
        },
      ],
    },
    {
      id: "6301_9",
      title: "INTERMEZZO",
      type: 6301,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 98518203,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title: "Nyerah, Soal Kelas 2 SD Ini Bikin Netizen Bingung",
              publisher: "Keepo.me",
              publisherId: "101019",
              badgeText: "",
              publishTimeUnix: 1615176901000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hb94uf1mhPRYJDCs0oQVCQTNaPnk6YC4VbTpsCFliYyElOX4QMW4mICoOZCNzP3pIZz5wcygIJidxNXoSZ28m",
              },
              url: {
                hash: "L3Ejwl",
                url: "https://today.line.me/id/article/L3Ejwl",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131601683,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Momen lucu pakai benda nggak sesuai fungsi, kocak abis",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615180920000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hLHpjTaEfE2dNEwVF-BlsMHdFEAh-fwBkKSVCeR19TVBhJlBieHEJUW5HTFNnIVQ5IyBaBG0SCFY1KlRkJnAJ",
              },
              url: {
                hash: "KneqRk",
                url: "https://today.line.me/id/article/KneqRk",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 85874961,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Seandainya Dinosaurus Nggak Punah, Bakal Jadi Seperti Apa?",
              publisher: "Keepo.me",
              publisherId: "101019",
              badgeText: "",
              publishTimeUnix: 1615180220000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hqDXGjfcgLmtlPjhJ2xFRPF9oLQRWUj1oAQh_dTVQcFxJC21uW15oWEQ_cFMYCmk1CwhiCkk-NVodB2loCV9o",
              },
              url: {
                hash: "mYyjDZ",
                url: "https://today.line.me/id/article/mYyjDZ",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 103397637,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title: "Pesta Miras Saat Lockdown, Wali Kota Ini Pura-pura Mati",
              publisher: "Keepo.me",
              publisherId: "101019",
              badgeText: "",
              publishTimeUnix: 1615180219000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h5x5wIR73alcIDnx1tigVADJYaTg7YnlUbDg7SVhgNGAkOylSNm4lZCldMGUtbS0JZjgmMygKcWZwNy1UZG8l",
              },
              url: {
                hash: "pPwxRa",
                url: "https://today.line.me/id/article/pPwxRa",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131591681,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Momen lucu ketika cuci piring ini bikin pengen bantu sambil nyengir",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615176060000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hGdQnR-vtGEtsFw5pxOBnHFZBGyRfewtICCFJVTx5RnxAIltNVCFWeE1HRnpIdV8VAiFUKE4XA3oULl9PAnlW",
              },
              url: {
                hash: "px8MBe",
                url: "https://today.line.me/id/article/px8MBe",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131595984,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Teori: 6 Karakter yang Paling Mungkin Membantu Marco di One Piece",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1615178100000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hNVj9-kh8EXlXQAdb9MFuLm4WEhZkLAJ6M3ZAZwcuT057dVJ_P3NZSnZCGBl9c1YnOXZZFnQFThxzcAMrOSE",
              },
              url: {
                hash: "DO8Keg",
                url: "https://today.line.me/id/article/DO8Keg",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
          ],
        },
      ],
    },
    {
      id: "6301_12",
      title: "VIDEO-NEWS",
      type: 6301,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131602296,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "Khawatir Longsor Susulan, Warga Minta TPT Segera Diperbaiki",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615181535000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hcS44SD9SPHwJTSpevKRDKzMbPxM6IS9_bXttYlkjYksleH95PHgnSioaYkoneXsiZ3h1HS9FJ01xdHt_Ynsn",
              },
              url: {
                hash: "30BMqZ",
                url: "https://today.line.me/id/article/30BMqZ",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131602295,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Vaksin Massal Untuk Petugas Lapas Kelas II Garut",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615181333000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hPEmsBbJTD2pQChlI5StwPWpcDAVjZhxpNDxedABkUl18P0xvZWpHXHNdBVt_PUg0Pj9CDncJFFsoM0hpO2tH",
              },
              url: {
                hash: "MzR82M",
                url: "https://today.line.me/id/article/MzR82M",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131602297,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Pedagang Pasar Kesulitan Akses Aplikasi Suntik Vaksin",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615181409000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hesoRErcvOlxSKyx-5_BFC2h9OTNhRylfNh1rQgJFZ2t-HnlZZ0QnanEvbDwsH30CPB5wPH8rIW0qEn1fOUsn",
              },
              url: {
                hash: "YxloWQ",
                url: "https://today.line.me/id/article/YxloWQ",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131599658,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Penyintas Corona B117 Dalam Pengawasan Satgas Covid",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615180425000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hcarNmAmNPE5PNyps8fxDGXVhPyF8Wy9NKwFtUB9ZYXljAn9LcVkhfW5lN34yA3sQJlF6K2I0J383DntNI1gh",
              },
              url: {
                hash: "XxBDYZ",
                url: "https://today.line.me/id/article/XxBDYZ",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131599659,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Tanggapi KLB, DPD Demokrat Banten: Kami Siap Tempur!",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615180310000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hQXdkTWmFDndZEhhV595xIGNEDRhqfh10PSRfaQl8UEB1J01yZ3wSRHhBAkB1IEkpMHRIEnkaFUYhK0l0NX0S",
              },
              url: {
                hash: "612a0j",
                url: "https://today.line.me/id/article/612a0j",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131602298,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "Pastikan Bebas Narkoba, Anggota Polisi di Sukabumi Dites Urin",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615181119000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hRZeLPqBIDXVYNRtX7f1yImJjDhprWR52PANcawhbUEJ0AE5wbVsSQ3tiUUNxVUorNgBGGng8FkQgDEp2M1oV",
              },
              url: {
                hash: "kzjneL",
                url: "https://today.line.me/id/article/kzjneL",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
          ],
        },
      ],
    },
    {
      id: "6301_13",
      title: "SPORTS",
      type: 6301,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131602008,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "3 Pemain Timnas U-23 yang Diprediksi Bersinar di Piala Menpora",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1615181804725,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hP9qNjNCUDxZMNxk0-fZwQXZhDHl_WxwVKAFeCBxZUSFgAkwTeVlHJW0-AyE1D0hIJVBEdG80FCc0DkgVJ1hH",
              },
              url: {
                hash: "30BMpP",
                url: "https://today.line.me/id/article/30BMpP",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602846,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Juventus dan Milan Menang, Netizen Berjamaah Doakan Inter Dipecundangi Atalanta",
              publisher: "bola.net",
              publisherId: "100076",
              badgeText: "",
              publishTimeUnix: 1615182320989,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hHxr3cnV7F1dPSgF1-INoAHUcFDh8JgRUK3xGSR8kSWBjf1RSIyQMZG4dSGAwKlAJISRdNGJODGY3c1BVcyUM",
              },
              url: {
                hash: "1Wgoyz",
                url: "https://today.line.me/id/article/1Wgoyz",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 3,
            },
            {
              id: 131602779,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Drawing Grup Piala Menpora Bakal Tentukan Langkah Madura United Selanjutnya",
              publisher: "INDOSPORT.com",
              publisherId: "100442",
              badgeText: "",
              publishTimeUnix: 1615182000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hKkKkz7_XFER2EgJmwTJrE0xEFytFfgdHEiRFWiZ8SnNaJ1dBGnJdclVCH3NeJVMaH3VeI1ETD3UOK1NGSnNd",
              },
              url: {
                hash: "Empy6k",
                url: "https://today.line.me/id/article/Empy6k",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602787,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Terpilih Jadi Presiden Barcelona, Joan Laporta Langsung Kontak Ayah Lionel Messi",
              publisher: "INDOSPORT.com",
              publisherId: "100442",
              badgeText: "",
              publishTimeUnix: 1615181879000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hidQahDiUNktsGCBp2zhJHFZONSRfdCVICC5nVTx2aHxALXVOAHh_fU9KYCtELHEVBX97JU8RLXoUIXFJUHl_",
              },
              url: {
                hash: "zPaZQ6",
                url: "https://today.line.me/id/article/zPaZQ6",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602900,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                " Stephen Curry Juarai Kontes Tiga Poin All-Star Game NBA ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615182045000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hxLxUC620J2NFLDFB8tVYNHx6JAx2QDRgIRp2fRVCeVRpGWRmKRo8VWZ-eAZuFGA9KxlqA2FpeAZhHDQ1cR4",
              },
              url: {
                hash: "PB0Rel",
                url: "https://today.line.me/id/article/PB0Rel",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602910,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                " NBA All-Star 2021: Tim LeBron Kalahkan Tim Durant, Giannis Antetokounmpo MVP ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615182266000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hzuDf4uWCJVp5HzN4zuZaDUBJJjVKczZZHSl0RClxe21VKmZfFSk-bFpIfjlUJmIEFypvP1paej9dLzYMTS0",
              },
              url: {
                hash: "kzjnK0",
                url: "https://today.line.me/id/article/kzjnK0",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
          ],
        },
      ],
    },
    {
      id: "63_6",
      title: "SCI-TECH & GAMING",
      type: 63,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131597211,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Frzz Mengaku Bahasa Jawa Jadi Rahasia Kekuatan Geek Fam di Musim Ini",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615177140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h_S-nFhZyAHwQFxZerFp_KypBAxMjexN_dCFRYkB5Xks8IkN5LHEfSjNFXkU5LkcifiVIHzERG01oLkd_JXAf",
              },
              url: {
                hash: "28gK9B",
                url: "https://today.line.me/id/article/28gK9B",
              },
              viewCount: 17,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131564172,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Belasan Lubang Besar Muncul, Ribuan Penduduk Takut Ditelan Bumi",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615158179000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCDWH3RhrHGtqMQpJOwhjPFNnHwRZXQ9oDgdNdTpfQlxGBF85BFAHXUliF18QUVs1BAJWDEt0Qw5OAVI_UgM",
              },
              url: {
                hash: "BXG0Vj",
                url: "https://today.line.me/id/article/BXG0Vj",
              },
              viewCount: 162,
              commentCount: 1,
              likeCount: 2,
              type: 0,
            },
            {
              id: 131585961,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Ini Dia Genshin Impact Redeem Code Terbaru Edisi Maret 2021, Buruan Ambil!",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615174320000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hexs4L960OldOTSx12MZFAHQbOTh9ISlUKntrSR4jZGBieHkJIX4nZG8dMWVke30JICN1OWtLIWY2dH1TcXkn",
              },
              url: {
                hash: "mxjKNW",
                url: "https://today.line.me/id/article/mxjKNW",
              },
              viewCount: 7,
              commentCount: 0,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131582662,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title: "7 Jurusan Paling Dibutuhkan Dalam 5 Tahun ke Depan",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1615172820000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hjq-6CycnNV4QTyN8iA1KCSoZNjEjIyZddHlkQEAha2k8enYAKCl-aDNNOGg0d3IAfnx5OTFMLm9odnJbfih-",
              },
              url: {
                hash: "rxGQZj",
                url: "https://today.line.me/id/article/rxGQZj",
              },
              viewCount: 30,
              commentCount: 1,
              likeCount: 1,
              type: 0,
            },
            {
              id: 131564308,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                " Tak Dapat Tebusan, Hacker Bocorkan Detail Pesawat Mata-mata Bombardier ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615158000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hKSTLtXYFFHxpNQJeOMhrK1NjFxNaWQd_DQNFYjlbSktFAFcuBwMLT0hmGEUTBVMiB1tdGEszD00RDFMjV1sL",
              },
              url: {
                hash: "30Br1M",
                url: "https://today.line.me/id/article/30Br1M",
              },
              viewCount: 99,
              commentCount: 1,
              likeCount: 1,
              type: 0,
            },
            {
              id: 131538223,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Terungkap, karena Alasan Ini Xiaomi Masuk Daftar Hitam Amerika Serikat",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615119041000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hYDjeY0zwBmtXHBBImax5PG1KBQRkcBVoMypXdQdyWFx7KURvaS5PXXQbC1wue0E1OSpPDXMfHVovJUBpOy9P",
              },
              url: {
                hash: "nxjqW1",
                url: "https://today.line.me/id/article/nxjqW1",
              },
              viewCount: 28,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
          ],
        },
      ],
    },
    {
      id: "6301_7",
      title: "ENGLISH SECTION",
      type: 6301,
      sections: [
        {
          type: 4,
          articles: [
            {
              id: 131602866,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title:
                "Indonesia Says Multilateral Diplomacy Best Way to Resolve Iran Nuclear Issue",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1615181651000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hDKbuqWbxG2RfDA1G6PxkM2daGAtsYAhnOzpKeg9iRVNzOVhhMzpSUnxYFVYnPlw6MTlWBj8NEF1yaFw6ZQ",
              },
              url: {
                hash: "N7W0Gm",
                url: "https://today.line.me/id/article/N7W0Gm",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602750,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title:
                " Instagram-ready: Vietnamese influencer teaches art of posing ",
              publisher: "thejakartapost.com",
              publisherId: "100684",
              badgeText: "",
              publishTimeUnix: 1615181540000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hmvuBe8XjMllIOyR7_xhNDnJtMTZ7VyFaLA1jRxhVbG5kDnFcJFt4b2s-b2xjX3UHIVx_Nm49KWgwAnVbdFp4",
              },
              url: {
                hash: "GjDezL",
                url: "https://today.line.me/id/article/GjDezL",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131599434,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title: " Myanmar protesters gather after general strike call ",
              publisher: "thejakartapost.com",
              publisherId: "100684",
              badgeText: "",
              publishTimeUnix: 1615179906000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hMUFfgeqVEnp7HwRYxSRtLUFJERVIcwF5HylDZCtxTE1XKlF_RX4PTFhPTkpfKVUkFS5bFF8fCUsDJlV5F30P",
              },
              url: {
                hash: "0q8zvp",
                url: "https://today.line.me/id/article/0q8zvp",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131597661,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title:
                " Indonesia Receiving 1.1mn Doses of AstraZeneca Vaccines Today ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615179660000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hNjZiT68SEUVnEAdn289uEl1GEipUfAJGAyZAWzd-T3JLJVJAW39Xc0RCTyEaclYbCSZZJUsZCnQfKVZGUnBX",
              },
              url: {
                hash: "mxjeLn",
                url: "https://today.line.me/id/article/mxjeLn",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131596008,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title:
                " Jakarta Preps Rules on Permanent Bike Lane: Deputy Gov Riza Patria ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615179151000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hX9bw8o9lBxZfDhE0_LJ4QWVYBHlsYhQVOzhWCA9gWSFzO0QQNzwbJX4HCy50OkBINmhLdn8KHCcnN0AVZz0b",
              },
              url: {
                hash: "30BKQE",
                url: "https://today.line.me/id/article/30BKQE",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131592653,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "English",
              categoryId: 100604,
              title:
                "Asia markets mostly up on US jobs news but inflation fears linger",
              publisher: "thejakartapost.com",
              publisherId: "100684",
              badgeText: "",
              publishTimeUnix: 1615177332000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hjR2ekJEKNX0PHCNfpf5KKjVKNhI8cCZ-aypkY19ya0ojKXZ7NSl_SywbOxkleHIjYS19HSIVLkx3JXJ5Zyp-",
              },
              url: {
                hash: "YxlxeB",
                url: "https://today.line.me/id/article/YxlxeB",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
          ],
        },
      ],
    },
    {
      id: "6301_8",
      title: "BERITA TERBARU",
      type: 6301,
      sections: [
        {
          type: 9,
          articles: [
            {
              id: 131600311,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "9 Cara Menjadi Ibu Mertua yang Baik, Ini Rahasia Hubungan Harmonis dengan Menantu",
              publisher: "SehatQ",
              publisherId: "101925",
              badgeText: "",
              publishTimeUnix: 1615180980000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hVttyV4GGCVtJAB958fR2DHNWCjR6bBpYLTZYRRluV2xlNUpecTZEaGhUUW5kMk4FJzFENW8BEmoxOU5YJ25E",
              },
              url: {
                hash: "28ga06",
                url: "https://today.line.me/id/article/28ga06",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600406,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "5 Resep Salmon untuk Bayi Usia 1 Tahun yang Menambah Selera Makan",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615180800000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hXrVLp73SB11rNRF_06Z4ClFjBDJYWRReDwNWQztbWWpHAERYUwFNa0gxWT8UBUADBQBNPkY2HGwTDEBeBQBN",
              },
              url: {
                hash: "GjDayY",
                url: "https://today.line.me/id/article/GjDayY",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131600412,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "7 Tokoh Perempuan Indonesia yang Bisa Jadi Panutan bagi Anak",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615179900000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0huCRvoqVGKmxvDzxO15BVO1VZKQNcYzlvCzl7cj9hdFtDOmlpVztsWkwMfVsWO20yATpgDEMPMV0XNm1vATps",
              },
              url: {
                hash: "Q5zay3",
                url: "https://today.line.me/id/article/Q5zay3",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131597398,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "12 Hal yang Bisa Bikin ASI Jadi Terasa Tidak Enak buat Bayi",
              publisher: "Motherandbaby.co.id",
              publisherId: "101207",
              badgeText: "",
              publishTimeUnix: 1615179600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h-ZZvBxNkcnVnD2RX22INIl1ZcRpUY2F2AzkjazdhLEJLOjFwW2ttRkYPfxFOOTUrCTw9G0IMaUQfNjV2Umpt",
              },
              url: {
                hash: "kzjyyw",
                url: "https://today.line.me/id/article/kzjyyw",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131594845,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Bagaimana Tekstur MPASI yang Tepat untuk Bayi Usia 6 Bulan?",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615178100000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hPl89rwE2D0MFQBlhpEpwFD8WDCw2LBxAYXZeXVUuUXQpdUxFayIVdSZGAnMhdUgda3VAIiVJFHJ9eUhAOyMV",
              },
              url: {
                hash: "9o2kPx",
                url: "https://today.line.me/id/article/9o2kPx",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131594839,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Wajib Dihindari, Ini 5 Makanan yang Memperparah Gejala Flu",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615177800000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hi0T0cc4CNh9pSSA9yENJSFMfNXBaJSUcDX9nATknaChFfHUZByssKUpObSoQLHFBB3x5fklILS4RcHEcVyos",
              },
              url: {
                hash: "KneBrn",
                url: "https://today.line.me/id/article/KneBrn",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131594851,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title: "5 Fakta Tentang Pisau Keramik yang Perlu Mama Tahu",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615177500000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hnlGkWVCBMUN6Eidh2xhOFEBEMixJfiJAHiRgXSp8b3RWJ3JFFHArdVkXPyReJ3YdFCd-IlcWKnICK3ZARHEr",
              },
              url: {
                hash: "MzRl1D",
                url: "https://today.line.me/id/article/MzRl1D",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131592572,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "5 Cara Mengajarkan Anak 1 Tahun Sikat Gigi, Buat Jadi Menyenangkan!",
              publisher: "SehatQ",
              publisherId: "101925",
              badgeText: "",
              publishTimeUnix: 1615177200000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hO-x_tTuSEAJFJgYg7-JvVX9wE212SgMBIRBBHBVITjVpE1MEf0hdMWQiHGJtFldcKxNXZWIiCzM9H1cGLUld",
              },
              url: {
                hash: "BXGXwz",
                url: "https://today.line.me/id/article/BXGXwz",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131591416,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Ternyata Isi Tas Daus Mini Jadi Biang Kerok Perceraian dengan Yunita Lestari",
              publisher: "Haibunda",
              publisherId: "101062",
              badgeText: "",
              publishTimeUnix: 1615176518000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hjEjAdH7wNWpXOCNI_z1KPW1uNgVkVCZpMw5kdAdWa117DXZsb1p5XHQwYlp5CnI0Pl1yCHs7LlsvAXJuOVt5",
              },
              url: {
                hash: "OeD336",
                url: "https://today.line.me/id/article/OeD336",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131592682,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Parenting",
              categoryId: 100603,
              title:
                "Stop! Orangtua Tanpa Sadar Lakukan Stereotip Gender ke Anak",
              publisher: "Popmama.com",
              publisherId: "100673",
              badgeText: "",
              publishTimeUnix: 1615176300000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hme-AQ5Q0MkoQOCRouq5NHSpuMSUjVCFJdA5jVEBWbH08DXFMKgx9fDNrb3JuWHUUfgp1Lzw8KXtoAXVOeA19",
              },
              url: {
                hash: "Zxqxej",
                url: "https://today.line.me/id/article/Zxqxej",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131601417,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "[OPINI] 8 Karakter One Piece yang Kekuatannya Setara Kozuki Oden!",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615181700000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCrTikT81HF1pEAp_3EBjClNGHzJafA9eDSZNQzl-QmpFJV9YXHdVbkgREjgWJlsDByZVOEsRB2wRKVteASFV",
              },
              url: {
                hash: "mxjDnr",
                url: "https://today.line.me/id/article/mxjDnr",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131575492,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "Film Disney Pertama Dengan Pahlawan Perempuan Asia Tenggara",
              publisher: "Tagar.id",
              publisherId: "101852",
              badgeText: "",
              publishTimeUnix: 1615168080000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hTf4FPKPnC0kJPx1rgD90HjNpCCY6UxhKbQlaV1lRVX4lCkgWMF1Cfyo2Vy50XEwXYFpNKCw6EHhxBkxPZlxC",
              },
              url: {
                hash: "vxQVjQ",
                url: "https://today.line.me/id/article/vxQVjQ",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131572762,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "Sinopsis Film Cherry, Drama Hidup Tentara Muda Penuh Kejutan",
              publisher: "Tagar.id",
              publisherId: "101852",
              badgeText: "",
              publishTimeUnix: 1615165980000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hJ1MhgF7wFR5wEQM8B6VqSUpHFnFDfQYdFCdEACB_SylcJFZOHCNYKFNETidfKFJAHidYflQQDi8IKFIYTCJY",
              },
              url: {
                hash: "rxGN8j",
                url: "https://today.line.me/id/article/rxGN8j",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131568631,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title: "Peringkat 20 Film Horor Fiksi Frankenstein Terbaik",
              publisher: "Tagar.id",
              publisherId: "101852",
              badgeText: "",
              publishTimeUnix: 1615162020000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hLaPbKwUsE05tGwVsDIZsGVdNECFedwBNCS1CUD11TXlBLlAfAy8MeE4fSXkVLVQQAyhVLUodCH8VIlQQUy4M",
              },
              url: {
                hash: "qxEkaw",
                url: "https://today.line.me/id/article/qxEkaw",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131573799,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "Rekomendasi 6 Film Sci-Fi Low Budget 90-an, Modal Murah tapi Seru! ",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1615158000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hpzkIwojcL1VWMDl3JtZQAm9mLDplXDxWMgZ-SwZecWJ6BWwFPwVgZnc4dWJ9A2gLOF5gMXp1cDByADgGOlY",
                quality: 0,
              },
              url: {
                hash: "28g57j",
                url: "https://today.line.me/id/article/28g57j",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131560542,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "Zalim, romansa serial drama Turki yang menyita perhatian para dizi",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615149300000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hfTc5xYn_OXteTC9ZaLRGLGQaOhRtICp4OnpoZQ4iZ0xyeXovMXohSH9NM0t1fX4lMH11FH9MIkomdX4qYSIh",
              },
              url: {
                hash: "xxKnp1",
                url: "https://today.line.me/id/article/xxKnp1",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131547641,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title: "5 Penjahat Paling Berbahaya dalam Seri My Hero Academia",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1615125240000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hMID-tBsgEmZ5VARFlsttMUMCEQlKOAFlHWJDeCk6TFFVYVBkRmBUUFoBTFdXN1U4F2BZCV9VCVcBbVUxTWFU",
                quality: 0,
              },
              url: {
                hash: "axqEaO",
                url: "https://today.line.me/id/article/axqEaO",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131547661,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Karakter Anime Paling Konyol yang Pernah Ada, Bikin Ngakak!",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1615123260000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hhZXMCqAJN3VlNCFWiq1IIl9iNBpWWCR2AQJmazVaaUJJAXV3WgAsQ0Y3b0dLDXArCwB_E0UzLEQdDXAiUQEs",
                quality: 0,
              },
              url: {
                hash: "mxjBqm",
                url: "https://today.line.me/id/article/mxjBqm",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131541932,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Karakter yang Paling Disukai dalam Anime The Silent Voice",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1615121040000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h4TpkFAZra3tNEn1YkEgULHdEaBR-fnh4KSQ6ZR18NUxhJyl4cHVxSGxAZUk1KywlIyQsH2ATcEo1Ky16diNx",
                quality: 0,
              },
              url: {
                hash: "Wxy33g",
                url: "https://today.line.me/id/article/Wxy33g",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131539890,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Movie",
              categoryId: 100549,
              title:
                "5 Anime Drama yang Wajib Ditonton jika Kamu Suka Your Name",
              publisher: "IDN Times",
              publisherId: "100019",
              badgeText: "",
              publishTimeUnix: 1615116480000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hl3Ly0yt8MxxxACU_tUpMS0tWMHNCbCAfFTZiAiFubStdNXEYRWYpL1ACbHtfZHRCHzZ4cl0CKC0JOXUdTGcp",
                quality: 0,
              },
              url: {
                hash: "1Wgw3v",
                url: "https://today.line.me/id/article/1Wgw3v",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131592580,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Bocoran Lengkap Hadiah Elite Pass Season 35 Free Fire, Keren Semua!",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615176960000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hQxqqRYnWDldMCBh15spxAHZeDTh_ZB1UKD5fSRxmUGBgPU1RdmZFZG1fWGFnaEkJJW1CMm8IFWY0MUlTJGdF",
              },
              url: {
                hash: "RlwljY",
                url: "https://today.line.me/id/article/RlwljY",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131588321,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Garena Bakal Bagikan Skin Predator’s Strike Free Fire Gratis, Catat Tanggalnya!",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615176000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h-J6gWVcVcmULHmRHpscNMjJIcQo4cmFmbygje1twLFInKzFjNnFpVioeLwcvJjU7Yns4AS5bLQAvLmc1MSw",
              },
              url: {
                hash: "gxypQ8",
                url: "https://today.line.me/id/article/gxypQ8",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600277,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title: "Versi 1.4 Genshin Impact Tambah Fitur Dating Sim",
              publisher: "GAMEBROTT",
              publisherId: "101873",
              badgeText: "",
              publishTimeUnix: 1615173458000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h5HlBIyg3amdRO3xF6c8VMGttaQhiV3lkNQ07eQFVNFB9DiliaQ0nVHAyZFR6DC05OF0tB3A7cVYpAi1kP1Un",
              },
              url: {
                hash: "8vma0Z",
                url: "https://today.line.me/id/article/8vma0Z",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600275,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title: "10 Aplikasi Edit Video Terbaik untuk PC dan Laptop 2021",
              publisher: "GAMEBROTT",
              publisherId: "101873",
              badgeText: "",
              publishTimeUnix: 1615173455000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hEHiZAXb3GmdUIwxF7NBlMG51GQhnTwlkMBVLeQRNRFB4FllibBVQVHUnQAMuG105PUVdB3kmAVYsGl1kOk1Q",
              },
              url: {
                hash: "qxEDyy",
                url: "https://today.line.me/id/article/qxEDyy",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131542661,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Tampil Memuaskan, Geek Fam Dapatkan Kemenangan Keduanya di MPL ID Season 7",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615120200000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hTOeMeKi6C2BYNB1DhLR0N2JiCA9rWBhjPAJafghaVVd0AUljZAdCVns2UVRxAkw-NgJMBHk2EFEgDU1hbQBC",
              },
              url: {
                hash: "mxjzmn",
                url: "https://today.line.me/id/article/mxjzmn",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131531944,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                'Dipasangkan Kembali dengan Alberttt, Skylar: "Seru Banget, Duet MDL Lanjut ke MPL"',
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615112460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hJYS_e9vcFXZuJgNV04RqIVRwFhldSgZ1ChBEaD5IS0FCE1dzUxdeQE1zTBFBHlIoAEhaF0kuDkcWH1N1VBRe",
              },
              url: {
                hash: "PB00mj",
                url: "https://today.line.me/id/article/PB00mj",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131526528,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title: "Review Bravely Default 2: Nostalgia Game JRPG Klasik!",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1615109700000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hTD9CfH1HC2sEOh1Il-R0PD5sCAQ3VhhoYAxadVRUVVwoD0k1bFVMWCUyVFghXkw1bVxADig4EFp8A01vPFpM",
              },
              url: {
                hash: "BXGEMz",
                url: "https://today.line.me/id/article/BXGEMz",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131530531,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Hadirkan Duo Maut Skylar dan Alberttt, RRQ Hoshi Tumbangkan Bigetron Alpha!",
              publisher: "Dunia Games",
              publisherId: "101854",
              badgeText: "",
              publishTimeUnix: 1615109580000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h-LbUPv8ocmNfLGRA_jYNNGV6cQxsQGFgOxojfQ9CLFRzGTBlMU9oVXx7L1AgGDU9Nkk7BXsuaVInFTRgYUho",
              },
              url: {
                hash: "qxEWYm",
                url: "https://today.line.me/id/article/qxEWYm",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131523800,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Games",
              categoryId: 100627,
              title:
                "Tak Hanya RX 6700XT, Seri Radeon RX 6000 Juga Disiapkan untuk Jajaran Laptop",
              publisher: "GAMEBROTT",
              publisherId: "101873",
              badgeText: "",
              publishTimeUnix: 1615106108000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hkgI1OTDSNEh0SCJr7lZLH04eNydHJCdLEH5lViQman9YfXYWTitzfldIYipcfXMWHS5_K1VAL3kMcXJNHCxz",
              },
              url: {
                hash: "PBwqKV",
                url: "https://today.line.me/id/article/PBwqKV",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131587459,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Pose kocak orang saat fotoin teman ini ngeselin, ada yang tiduran",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615173720000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hfaRH5b8BOU5vMS9s_PRGGVVnOiFcXSpNCwdoUD9fZ3lDBHoQB191fU5hZnpCBn4QAV9xIUkxIn8XCH5KV151",
              },
              url: {
                hash: "612LLB",
                url: "https://today.line.me/id/article/612LLB",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 105032224,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Wanita Ini Rekam Cara Nakal Penjual Daging Ayam Biar Laku",
              publisher: "Keepo.me",
              publisherId: "101019",
              badgeText: "",
              publishTimeUnix: 1615172402000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hvJd5uuUTKWVZTD9HwPVWMmMaKgpqIDpmPXp4ewkid1J1eWo7YH4yU3pJc1x3e247N3pgBX5NMlQhdW5gNn8y",
              },
              url: {
                hash: "V5xBlB",
                url: "https://today.line.me/id/article/V5xBlB",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 67891940,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Dikira Hoaks, 15 Foto Tak Masuk Akal Ini Memang Benar Adanya",
              publisher: "Keepo.me",
              publisherId: "101019",
              badgeText: "",
              publishTimeUnix: 1615172402000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hXfaFLyKHB0lcPxFrxYV4HmZpBCZvUxRKOAlWVwxRWX5wCkQXZQ0df383Di10X0AXMglOKH02HHgkBkBMMwwd",
              },
              url: {
                hash: "DyeBNX",
                url: "https://today.line.me/id/article/DyeBNX",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131576344,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Pembahasan One Piece 1006: Marco Beraksi! Hidup Hyogoro Akan Berakhir?",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1615169100000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h5uY2aLqualpkS3x47hAVDV4daTVXJ3lZAH07RDQlNG1IfikFXix3aUUeMT9Oci0EDSwlPkZDcWscci1cDXp3",
              },
              url: {
                hash: "PB0QqM",
                url: "https://today.line.me/id/article/PB0QqM",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131571567,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title: "Tukang Nyasar! Ini Dia 10 Meme Zoro Nyasar ke Anime Lain",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1615165500000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hC7UnD54PHBhoFwo6HZZjT1JBH3dbew8bDCFNBjh5Qi9EIl9IXSRUK0kWRCwQLltGBiFaf0UWBykQLltGAyNU",
              },
              url: {
                hash: "nxj2kD",
                url: "https://today.line.me/id/article/nxj2kD",
              },
              viewCount: 1,
              type: 0,
              ageLimit: false,
              mediaContents: 1,
            },
            {
              id: 131566138,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Momen apes saat kumpul bareng teman ini bikin ngakak seharian",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615159560000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hOjRlUIeMEEVvFQZnAfhvElVDEypceQNGCyNBWz97TnJDIFMUUSAPc0wRTnQXI1cbBnJWKkoTC3QXLFcaAyMP",
              },
              url: {
                hash: "Zxq9KQ",
                url: "https://today.line.me/id/article/Zxq9KQ",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131565173,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Desain gagal papan pemberitahuan ini bikin mikir keras",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615158120000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hQnjosCdJDkFXFhhjBUFxFm1ADS5keh1CMyBfXwd4UHZ7I00TPHFAcnZBWHktdUkfOSJBLnQXFXAvL0kebydA",
              },
              url: {
                hash: "59gRE7",
                url: "https://today.line.me/id/article/59gRE7",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131563624,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title: "10 Foto lucu nama toko bikin bingung ini kocak abis",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615157040000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hYBLnOd6JBm1xFxBPK595OktBBQJCexVuFSFXcyF5WFpdIkU_SyQeXlBECF0PIkEzHyZMD1wTHVwJLkE9GSMe",
              },
              url: {
                hash: "V0yJeg",
                url: "https://today.line.me/id/article/V0yJeg",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131561839,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "10 Chat lucu coba nembak gebetan ini bikin auto mundur perlahan",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615152240000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hNn9jlHwVEUEEEwdjQIVuFj5FEi43fwJCYCVAX1R9T3YoJlISMCdeciVBHXkpK1YfaiJaLiEXCnB8KlYROSZe",
              },
              url: {
                hash: "KneG8n",
                url: "https://today.line.me/id/article/KneG8n",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131561101,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Intermezzo",
              categoryId: 100608,
              title:
                "Kampanye bersihkan udara Jakarta lewat street art mural berlanjut",
              publisher: "Brilio.net",
              publisherId: "100016",
              badgeText: "",
              publishTimeUnix: 1615151100000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hDPAhGFlaG398EQ1dM-FkKEZHGBBPfQh8GCdKYSx_RUhQJFgsQydSSV8REhtSdVwhEiJUEVEQAE4EKFwuSH9S",
              },
              url: {
                hash: "9o2Mgm",
                url: "https://today.line.me/id/article/9o2Mgm",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600497,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "Seluruh Sekolah di Lampung Utara Jalani Kegiatan Belajar Mengajar Tatap Muka, Amankah? ",
              publisher: "Metro TV",
              publisherId: "101479",
              badgeText: "",
              publishTimeUnix: 1615180265000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hjm6yf97NNUILACNgs-lKFTFWNi04bCZBbzZkXFtuaHUnNXZHMzUucSpVO3d2ZXIcYmd5IC8GLnNzOXJBZTYu",
              },
              url: {
                hash: "YxlDOW",
                url: "https://today.line.me/id/article/YxlDOW",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131600498,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Mencari Penyebab Kebakaran KM Fajar Baru 8 ",
              publisher: "Metro TV",
              publisherId: "101479",
              badgeText: "",
              publishTimeUnix: 1615180191000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hKxGUa4rnFFd6LAJ1wqprAEB6FzhJQAdUHhpFSSpCSWBWGVdSQh9bZFstTWNVGlMJE0tZNVYkD2YCFVNUFBhb",
              },
              url: {
                hash: "kzjDXZ",
                url: "https://today.line.me/id/article/kzjDXZ",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131599391,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "773 Personel TNI-Polri di Maros Jalani Vaksinasi ",
              publisher: "Metro TV",
              publisherId: "101479",
              badgeText: "",
              publishTimeUnix: 1615180149000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hhYcadH4BN3ZeGCFU4B9IIWRONBltdCR1Oi5maA52akFyLXRzYHp5RX8QaxZxK3AoMCxwF3wQLEcmIXB1Mnt5",
              },
              url: {
                hash: "LVgPaG",
                url: "https://today.line.me/id/article/LVgPaG",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131598331,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "Ganjar dan Risma Kompak Pijat Bareng, Bagikan Tips Biar Gak Stres Kerja Sama Mensos Risma",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615179853000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hYMtXPdByBmJJIRBA9mV5NXN3BQ16TRVhLRdXfBlPWFVlFEVndkdLUWhxW1ZkEUE8J09MBWUpHVMxGEFhfUZL",
              },
              url: {
                hash: "qxEpyw",
                url: "https://today.line.me/id/article/qxEpyw",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131598332,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "De Voyage, pedesaan eropa yang instagenic di Bogor | Jalan-Jalan",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615179821000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hvMehZ9doKWJYET9A5OJWNWJHKg1rfTphPCd4fAh_dFV0JGpnZCdjUXkYc1J8cW48Nn9gAnwQMlMgKG5hbX9j",
              },
              url: {
                hash: "Wxy2nJ",
                url: "https://today.line.me/id/article/Wxy2nJ",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131597395,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "AHY Tiba di Kemenkumham Serahkan Surat Penolakan KLB Deli Serdang ",
              publisher: "Metro TV",
              publisherId: "101479",
              badgeText: "",
              publishTimeUnix: 1615179472000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0h0M1LWlWIb2IMNXlAsEAQNTZjbA0_WXxhaAM-fFxbMlUgACxnMFAjUS1iM1sjUCg8ZVMiASw1dFN0DChhOVMj",
              },
              url: {
                hash: "MzRKKa",
                url: "https://today.line.me/id/article/MzRKKa",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131598333,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Korupsi di Tengah Pemerintah Kejar Penerimaan Pajak",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615179378000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hLT9TI7JrE3sELQVZuI9sLD57EBQ3QQB4YBtCZVRDTkwoGFB-OBxYSCUpRUl8HlQlakNfHikpCEp8FFR4MR9Y",
              },
              url: {
                hash: "8vmr0E",
                url: "https://today.line.me/id/article/8vmr0E",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131596818,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Kasus Suap di Ditjen Pajak Terjadi Lagi, Sampai Kapan?",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615179071000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hUBoFIsn8Cm1SPxxP8DB1OmhpCQJhUxluNglbcwJRV1p-CklrOV1CW3E4XQgoXE0zPA1HA38_EVwqBk1uaVxM",
              },
              url: {
                hash: "rxGW6Y",
                url: "https://today.line.me/id/article/rxGW6Y",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131598334,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title: "Lansia di Kota Bandung Divaksin Tahap Dua",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615178992000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0h5N45Cuc1amEJTHxDtg8VNjAaaQ46IHlibXo7f1kiN1YleSlkNiogUigcZ1cjeS0_YCknBykJNQQtfHg_NC8",
              },
              url: {
                hash: "0q8zJp",
                url: "https://today.line.me/id/article/0q8zJp",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131596820,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Videos",
              categoryId: 100472,
              title:
                "Miniatur Truk Oling Laku Keras di Pasaran, Pelajar SMK Kecipratan Untung",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615178881000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hGDIwjzaRGGt0Dg5J1mlnPE5YGwRHYgtoEDhJdSRgRlxYO1ttH2sAXVdbR1wNOF81HWhQCVEHA1oMN19oT2tW",
              },
              url: {
                hash: "wxRPwp",
                url: "https://today.line.me/id/article/wxRPwp",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              mediaContents: 2,
            },
            {
              id: 131602915,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                " Pengendara Motor Terobos Jalur Sepeda, Begini Kata Wagub DKI Jakarta Riza ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615182002000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hIqtiyWUGFl5JEAB8_vVpCXBGFTF6fAVdLSZHQBl-SGllJVVbJSVaaGoQGGc2clEAJyVeOG9VSTttIAUIJXU",
              },
              url: {
                hash: "612k9j",
                url: "https://today.line.me/id/article/612k9j",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601694,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                " 6 Bulan Dipasarkan, Wuling Mini EV Rp 60 Jutaan Terjual 156 Ribu Unit ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615181626000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hAH1YbUVSHmcMIAhFuRdhMDZ2HQg_TA1kaBZPeVxOQFAgFV1iOUFQUS8gQwUiRVk5YhVSAS8pBVZ0GVlkZ0JQ",
              },
              url: {
                hash: "GjDekL",
                url: "https://today.line.me/id/article/GjDekL",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602505,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title: "Recall Avanza Malaysia Berbuntut hingga ke Indonesia",
              publisher: "Kompas.com",
              publisherId: "100014",
              badgeText: "",
              publishTimeUnix: 1615181460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h84DDNzwgZxt5PXE5zfIYTENrZHRKUXQYHQs2BSlTOSxVCCQeTVMhLVpoMX4GCiBFFwwue104fCoBBCAZRFIh",
              },
              url: {
                hash: "oxOe2q",
                url: "https://today.line.me/id/article/oxOe2q",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131599636,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title: " Desain Setir Mobil Tesla Terancam Status Ilegal",
              publisher: "Otosia.com",
              publisherId: "100018",
              badgeText: "",
              publishTimeUnix: 1615180500000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hlzOvLl71M1VyDyV3zPhMAkhZMDpBYyBWFjliSyJhbWJeOnBQTDl9Y1FbbmJfPXQLG2l1NlAGKGQKNnRWHmF9",
              },
              url: {
                hash: "Rlwa3z",
                url: "https://today.line.me/id/article/Rlwa3z",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131599872,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                "Kumpulan Potret Peringatan Jalan Rusak yang Bikin Cekikikan",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615179870000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hpagMB62tL05aNDls5K5QGWBiLCFpWDxNPgJ-UApacXl2AWxLZAAyeHlmJSx1UWgQM1NlKHg9NH8iDWhNNgE1",
              },
              url: {
                hash: "BXGaZn",
                url: "https://today.line.me/id/article/BXGaZn",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 3,
            },
            {
              id: 131597666,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                " Penjualan Honda akibat PPnBM Nol Persen: Honda HR-V 1.5L Paling Laris ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615179843000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hau8MC2S8PloFNCh4ueFBDT9iPTU2WC1ZYQJvRFVaYG0pAX1fOVtybCYzM2l6UXkEawZxOSQ3JWt9DXlZMFRy",
              },
              url: {
                hash: "N7W1XO",
                url: "https://today.line.me/id/article/N7W1XO",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131597481,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title: "Motor Mogok Di Jalan? Jangan Panik, Gini Menghadapinya",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1615179600000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hJYy4RYIkFXZETQNU-HlqIX4bFhl3IQZ1IHtEaBQjS0FoeFZzeCxYRWVJSRZveVIoKiNZGWlNDkc8dFJ1cS9Y",
              },
              url: {
                hash: "px8lDl",
                url: "https://today.line.me/id/article/px8lDl",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131595762,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                "Selera Otomotif Moeldoko, Camry Hybrid hingga Bus Listrik",
              publisher: "Bisnis.com",
              publisherId: "101946",
              badgeText: "",
              publishTimeUnix: 1615179038000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0heKvvM--uOmRLDyxG6NRFM3FZOQt4YylnLzlrehthZFNnOnliI2AnUmhcZVcybH06ImlzAm0OIVUzNn1nc28n",
              },
              url: {
                hash: "rxGWEY",
                url: "https://today.line.me/id/article/rxGWEY",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131595560,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                "Tak Cuma Tangkap Pelanggar Lalu Lintas, Ini Fungsi Lain Kamera ETLE ",
              publisher: "Kompas.com",
              publisherId: "100014",
              badgeText: "",
              publishTimeUnix: 1615178460000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hVOVg5R1lCWBrHh9Cyyd2N1FICg9YchpjDyhYfjtwV1dHK0pmAn8SVkhMVgVPJ04-BStPBksZElETJ05jUnwS",
              },
              url: {
                hash: "OeDWEm",
                url: "https://today.line.me/id/article/OeDWEm",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131594924,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Otomotif",
              categoryId: 100582,
              title:
                " Wuling Mini EV Mobil Listrik Terlaris di Dunia, Tesla Model 3 Kalah ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615178358000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hQvMDoJQ8DllwPRh70eZxDkprDTZDUR1aFAtfRyBTUG5cCE1fHlITb1NoUW9UBEkHGVpEOVE4FWgIBElaTl0T",
              },
              url: {
                hash: "V0yLjR",
                url: "https://today.line.me/id/article/V0yLjR",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602783,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Maguire dan 3 Pemain Kunci di Balik Kemenangan Manchester United atas City",
              publisher: "INDOSPORT.com",
              publisherId: "100442",
              badgeText: "",
              publishTimeUnix: 1615181704000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h6ea__EJLaUpcJn9o6wkWHWZwaiVvSnpJOBA4VAxIN31wEypPMEYvfH8iPn8lQi4UNUEjLHgucnskHy5IYEcv",
              },
              url: {
                hash: "Kneqzk",
                url: "https://today.line.me/id/article/Kneqzk",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601295,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Kandas di Derby Manchester, Zinchenko: Man City Akan Bangkit!",
              publisher: "Manchester City",
              publisherId: "101438",
              badgeText: "",
              publishTimeUnix: 1615181700000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hWFTL2XALCGlpNR5L1Ld3PlNjCwZaWRtqDQNZdzlbVl5FAEtsVAZCWk8yBlEXDU83AFJCC0k2E1gRDE9qUwFD",
                quality: 0,
              },
              url: {
                hash: "MzRa9w",
                url: "https://today.line.me/id/article/MzRa9w",
              },
              viewCount: 1,
              type: 0,
              contentType: 5,
              ageLimit: false,
              mediaContents: 2,
            },
            {
              id: 131601593,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Turnamen Biliar Hot Nine: Libas Silviana Lu, Echa Sudarto Melajuke Semifinal",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615181466000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hZSUn1eReBXxoFxNe3Xl6K1BBBhNbexZ_DCFUYjh5W0tEIkZ5XXNCSksXUxxHdUIiBiJIGwgWDkVFchUpXA",
              },
              url: {
                hash: "oxOeqw",
                url: "https://today.line.me/id/article/oxOeqw",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602856,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title: "Dua Jenis Pelatihan Penting untuk Kucing Persia",
              publisher: "Bola.com",
              publisherId: "100030",
              badgeText: "",
              publishTimeUnix: 1615181425000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hczxMlxhzPFVFNCp38sZDAn9iPzp2WC9WIQJtSxVaYmJpAX9QKQJ3ZmQzYzdvBXsLKwZ2O2g3J2Q9DXtXeVp3",
              },
              url: {
                hash: "Q5zpYr",
                url: "https://today.line.me/id/article/Q5zpYr",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601909,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Manchester United Hajar Manchester City, Marcus Rashford Jadi Tumbal",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615181409000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hGR4dtr1OGH0JHQ5fvDVnKjNLGxI6cQt-bStJY1lzRkolKFt4PH0ASyoYREsmKl8jZytTHywcA0xxJF9-YnwA",
              },
              url: {
                hash: "YxlokP",
                url: "https://today.line.me/id/article/YxlokP",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 3,
            },
            {
              id: 131601329,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Takluk 0-1 Dari Fulham, Liverpool Tambah Rentetan Kekalahan di Anfield",
              publisher: "ligaolahraga.com",
              publisherId: "102246",
              badgeText: "",
              publishTimeUnix: 1615181409000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hZEBfEx-zBWp_HxNIxbZ6PUVJBgVMcxZpGylUdC9xW11TKkZvRS4eWV4YXlIALUI0ES5OCV0dHlsHJkJpFy0e",
              },
              url: {
                hash: "59gaaV",
                url: "https://today.line.me/id/article/59gaaV",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601522,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Lini Tengah Bali United Jadi Sorotan Saat Dikalahkan Timnas U-23, Ini Kata Teco",
              publisher: "Bolalob",
              publisherId: "100964",
              badgeText: "",
              publishTimeUnix: 1615181402061,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hDyN3aHlGG1ZzSg10xjZkAUkcGDlAJghVF3xKSCMkRWFff1hTRi8HZVIaQjUKKVwIHXxcNFBPAGcLc1xVGCwH",
              },
              url: {
                hash: "N7WaeG",
                url: "https://today.line.me/id/article/N7WaeG",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 3,
            },
            {
              id: 131601671,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title:
                "Madura United Fokus Asah Kualitas Kiper, Plus Berburu Pemain Lokal Baru",
              publisher: "Bola.com",
              publisherId: "100030",
              badgeText: "",
              publishTimeUnix: 1615181400000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h2fOLLgIZbUlyNXtrxzoSHktjbiZBWX5KFgM8VyJbM35eAC5MR1crf1FlMHhWAioXG1ArL1JwMixWBX9IS1o",
              },
              url: {
                hash: "exkmBB",
                url: "https://today.line.me/id/article/exkmBB",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 3,
            },
            {
              id: 131601578,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title: "Tim LeBron Berjaya di NBA All Star 2021",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615181353000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hcIj-EqO-PGZXVCpE4jZDMW0CPwlkOC9lM2JteAc6YlF7YX9jYjB3VXZSYFR9Z3s4OWV1CHdWJ1cvbXtlPDF3",
              },
              url: {
                hash: "0q8v1L",
                url: "https://today.line.me/id/article/0q8v1L",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601464,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sports",
              categoryId: 100609,
              title: "MU Belum Tahu Seberapa Parah Cedera Rashford",
              publisher: "REPUBLIKA ONLINE",
              publisherId: "101976",
              badgeText: "",
              publishTimeUnix: 1615181320000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h_dGGmL0sAEt6PhZpz2Z_HEBoAyRJUhNIHghRVSpQXnxWC0NOT1kYeFs8Wi4HCEcVFAhJK183G3oCB0dIEg8Y",
              },
              url: {
                hash: "wxRDWl",
                url: "https://today.line.me/id/article/wxRDWl",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602700,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title: "12 Anak Sanggar Eka Mahardika Putra Rilis Album ke-8",
              publisher: "Radar Bali",
              publisherId: "101567",
              badgeText: "",
              publishTimeUnix: 1615182359000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hAGxgGenqHmhFHghK8i1hP3xIHQd2cg1rIShPdhVwQF9pK11tKX9TW2QcRFBofVk2KyxZBmRbQQ1hLg0-fX0",
              },
              url: {
                hash: "PB0RQM",
                url: "https://today.line.me/id/article/PB0RQM",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131603081,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                " Trending di YouTube, Ini 4 Gaya Unik Esa Risty Pedangdut Asal Tulungagung ",
              publisher: "Merdeka.com",
              publisherId: "100021",
              badgeText: "",
              publishTimeUnix: 1615182300000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hqLlmC2yKLmNRFDhB5v1RNGtCLQxieD1gNSJ_fQF6cFR9IW1mPSE1VXJAeFQrJGk9PyFhAHUQNVIpLWlhbSI1",
              },
              url: {
                hash: "px8Bx6",
                url: "https://today.line.me/id/article/px8Bx6",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602744,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title: "Kapolres: Izin Senpi tak Boleh untuk Polisi Pemabuk",
              publisher: "REPUBLIKA ONLINE",
              publisherId: "101976",
              badgeText: "",
              publishTimeUnix: 1615182253000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hN18iI9iyER4FEAc8siluST9GEnE2fAIdYSZAAFV-TykpJVIbaXEKKCZFSnp9IlZAbHdcfSESCi99KVYcOXIK",
              },
              url: {
                hash: "PB0RNM",
                url: "https://today.line.me/id/article/PB0RNM",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602670,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Nyambi Jadi Pengedar Sabu, Pedagang Bakso di Labuhanbatu Ditangkap",
              publisher: "iNews.id",
              publisherId: "101793",
              badgeText: "",
              publishTimeUnix: 1615182240000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hByvIZEBgHVZLMAt0_DhiAXJmHjl4XA5VLwZMSBteQ2FnBV5TJ1IFZWo4Q2NiBloIJV5XMGl1QjNvAA4AcgE",
              },
              url: {
                hash: "7LD27r",
                url: "https://today.line.me/id/article/7LD27r",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602775,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Tukang Becak Temukan Tas Kresek Berisi Senpi dan 37 Peluru",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615182222000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hsQb_E06CLH5fJjpc6AZTKWVwLxFsSj99OxB9YA9IcklzE297M0ZlTX4udE0mF2sgNkBgHHIuN08nH2t8Y0dl",
              },
              url: {
                hash: "qxE5Lw",
                url: "https://today.line.me/id/article/qxE5Lw",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602621,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Polres Nagan Raya Musnahkan Tiga Hektare Lahan Ganja di Beutong Ateuh",
              publisher: "ACEHSATU",
              publisherId: "102200",
              badgeText: "",
              publishTimeUnix: 1615182150000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hnM6Le-u4MWILNSdAvCNONTFjMg04WSJhbwNgfFtbb1UnAHJnZ1Z-VCg0bVInUnY8YlN3Biw2KlNzDHZgN1F-",
              },
              url: {
                hash: "gxyjv8",
                url: "https://today.line.me/id/article/gxyjv8",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602671,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "Sentot Kembali Pimpin PKB Kabupaten Kediri, Ini Target di 2024",
              publisher: "Radar Kediri",
              publisherId: "101631",
              badgeText: "",
              publishTimeUnix: 1615182013000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hDAaLqg2LG25cNQ1M6z1kOWVjGAFvWQhtOANKcAxbRVlwAFhrMFcDXX1iQAsjDFwwNVNSCX9wRAt4BQg4ZQQ",
              },
              url: {
                hash: "exkmYx",
                url: "https://today.line.me/id/article/exkmYx",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 0,
            },
            {
              id: 131602732,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title: "Gubernur Sumbar Mahyeldi Jamin Vaksin Covid-19 Aman",
              publisher: "REPUBLIKA ONLINE",
              publisherId: "101976",
              badgeText: "",
              publishTimeUnix: 1615181871000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hRCNldlS6DWxzFRtOxC9yO0lDDgNAeR5vFyNcciN7U1tfIE5pH3QXWlAWV18KIUoyGnJACFYWFl0LLEpuT3cX",
              },
              url: {
                hash: "WxyLzJ",
                url: "https://today.line.me/id/article/WxyLzJ",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601437,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title: "PAD Sumbang Rp 212 Miliar di RAPBD 2021",
              publisher: "Radar Banyuwangi",
              publisherId: "101622",
              badgeText: "",
              publishTimeUnix: 1615181759000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hxT5lrrokJ3sIFTFZvU1YLDJDJBQ7eTR4bCN2ZVh7eUwkIGR-PXI_TSsXLB8ldmAlZidqFCwXPEpwLGB4YCQ_",
              },
              url: {
                hash: "px8D7p",
                url: "https://today.line.me/id/article/px8D7p",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602662,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Regional",
              categoryId: 100641,
              title:
                "AHY Tiba di Kemenkumham dan Sebut KLB Sibolangit Abal-abal di Depan 34 DPD Partai Demokrat",
              publisher: "INDOZONE.ID Regional",
              publisherId: "102011",
              badgeText: "",
              publishTimeUnix: 1615181729000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hCEQe8RadHGpsHApI2xhjPVZKHwVfcA9pCCpNdDxyQl1AKV9vAH5RXE8YR1oUfls0AilXDU8ZB1sUJVtoUH9R",
              },
              url: {
                hash: "rxGlNw",
                url: "https://today.line.me/id/article/rxGlNw",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131603130,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Vaksin Covid-19 Dijual Ilegal di Darknet Mulai Rp 3,5 Jutaan",
              publisher: "Liputan6.com",
              publisherId: "100015",
              badgeText: "",
              publishTimeUnix: 1615182300000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hD_0gc-qtG3ANHg1SuvRkJzdIGB8-cghzaShKbl1wRUchK1h1YSsBRi4cF0klK1wuYypRFC8bAEF1J1xyMSgB",
              },
              url: {
                hash: "lxEVy0",
                url: "https://today.line.me/id/article/lxEVy0",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602675,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Pengguna iCloud Terkunci dari Akunnya karena Nama Belakang",
              publisher: "iNews.id",
              publisherId: "101793",
              badgeText: "",
              publishTimeUnix: 1615181940000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hAzk2XzQkHlVWSwh34UNhAm8dHTplJw1WMn1PSwYlQGJ6fl1QOikGZnceEjUueVkLOCVUMnMOQTByew0Db3o",
              },
              url: {
                hash: "qxE5gD",
                url: "https://today.line.me/id/article/qxE5gD",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131602678,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Kartu SIM Terhubung dengan IoT, Ini Prediksi GSMA Intelligence ",
              publisher: "Bisnis.com",
              publisherId: "101946",
              badgeText: "",
              publishTimeUnix: 1615181924000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hMdjg67FvEktXHgRp4CltHG1IESRkcgFIMyhDVQdwTHx7K1FOO3wKfXQXSnkoflUVPnleKHoZCXovJ1VJa3xc",
              },
              url: {
                hash: "0q8vEL",
                url: "https://today.line.me/id/article/0q8vEL",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601597,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Google Doodle Peringati International Women's Day 2021 dengan Perjuangan Perempuan",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615181408000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0htlXRt7faK0NlKz1h0EZUFF19KCxWRzhAAR16XTVFdXRJHmhGUE80dUYrcXtIHWwdCx5iIgUqIHpITjsWCQ",
              },
              url: {
                hash: "YxloaW",
                url: "https://today.line.me/id/article/YxloaW",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131601571,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title: "Kawanan Hacker Asal China Kembali Beraksi",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615181376000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hNZpc6te_EXVNGgdX-HpuInRMEhp-dgJ2KSxAax10T0JhL1JweH5YRmwaTURnK1YrIyxbFm9fThBpKgN0cno",
              },
              url: {
                hash: "exkmox",
                url: "https://today.line.me/id/article/exkmox",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131603071,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                " Startup Xendit Raih Pendanaan Seri B Senilai US$ 64,6 Juta dari Accel ",
              publisher: "Merdeka.com",
              publisherId: "100021",
              badgeText: "",
              publishTimeUnix: 1615181154000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hTtrEekJiC1tPPB15-NN0DHVqCDR8UBhYKwpaRR9SVWxjCUheIwlNbWw9VWxnXkwFIQlEPGk1EGo3BUxZcwpN",
              },
              url: {
                hash: "exkmzD",
                url: "https://today.line.me/id/article/exkmzD",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600451,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Kemendikbud Buka Lowongan Guru untuk Sekolah Indonesia di Luar Negeri",
              publisher: "SINDOnews",
              publisherId: "100840",
              badgeText: "",
              publishTimeUnix: 1615181131000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hgpI9g1D6OF90QC59zMdHCE4WOzBHLCtcEHZpQSQuZmhYdXtaTHN2bFVBMWtYIH8BGnFzMFlDI24MeX9cGnR2",
              },
              url: {
                hash: "MzRa3Q",
                url: "https://today.line.me/id/article/MzRa3Q",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600477,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title: "Pesawat Nirawak Elang Hitam Terbang Perdana Tahun Ini",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1615180620000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0h-m7TPmJJckIKLWRgsqQNFTB7cS05QWFBbhsjXFpDLHUmGDFHMh5pcSt9f3MhTzUcZB46ICwoaXNyFDVBZBlp",
              },
              url: {
                hash: "8vmaGx",
                url: "https://today.line.me/id/article/8vmaGx",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131600820,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title:
                "Google Doodle Tampilkan Perayaan Hari Perempuan Sedunia 2021",
              publisher: "Okezone.com",
              publisherId: "100184",
              badgeText: "",
              publishTimeUnix: 1615180411000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hxtsfVxrNJ1tOHzF59UhYDHRJJDR9czRYKil2RR5xeWxiKmRedXhpaG8XezxhKGAFIC5hOWocPGo2JmBYIC5p",
              },
              url: {
                hash: "wxRDMa",
                url: "https://today.line.me/id/article/wxRDMa",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
            {
              id: 131599569,
              source: "AUTO",
              status: "NOTYET",
              categoryName: "Sci-Tech",
              categoryId: 100622,
              title: "Guru Besar IPB Bagikan Tips Sukses Kuliah Pascasarjana",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1615180140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hpWc3DDaUL3heSjla4JlQL2QcLBdtJjx7Onx-Zg4kcU9yf2x9YCVlS38ZchsjKGgmMHxiHH1LNEkmc2h7Mipl",
              },
              url: {
                hash: "yxRMeo",
                url: "https://today.line.me/id/article/yxRMeo",
              },
              viewCount: 1,
              type: 0,
              mediaContents: 1,
            },
          ],
        },
      ],
    },
    {
      id: "6303_11",
      title: "BANYAK DIKOMENTARI",
      type: 6303,
      sections: [
        {
          type: 3,
          articles: [
            {
              id: 131535222,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100602,
              title:
                " Kemenkeu: Utang Bambang Trihatmodjo Terus Ditagih Sampai Selesai ",
              publisher: "Tempo.co",
              publisherId: "100023",
              badgeText: "",
              publishTimeUnix: 1615117080000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hKdaaPzF4FEtcGAJo64trHGZOFyRvdAdIOC5FVQx2SnxwLVZOMCxeeH1LHSlzKFMVMitfKnseD3okIVJJYC1e",
              },
              url: {
                hash: "N7Wlz1",
                url: "https://today.line.me/id/article/N7Wlz1",
              },
              viewCount: 131,
              commentCount: 61,
              likeCount: 39,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131514534,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100271,
              title:
                "Bambang Trihadmodjo Dipaksa Bertekuk Lutut kepada Sri Mulyani",
              publisher: "Tagar.id",
              publisherId: "101852",
              badgeText: "",
              publishTimeUnix: 1615100295000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hdgutmhVkO0hIDS1rPnpEH3JbOCd7YShLLDtqVhhjZX9kOHkYJ2h1fmteNnlgbnwWJj9zJmsLIHkwNH1Od2t1",
              },
              url: {
                hash: "0qraDG",
                url: "https://today.line.me/id/article/0qraDG",
              },
              viewCount: 110,
              commentCount: 22,
              likeCount: 7,
              type: 0,
            },
            {
              id: 131579863,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100665,
              title: "Viral, Foto Kaesang-Felicia dan Nadya di Singapura",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615171140000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hsaKZEv8YLE52Izps9XFTGUx1LyFFTz9NEhV9UCZNcnlaFm8RHkRnfVdxIndYQGsQH0ZqKlQqN38OGmtLTxJn",
              },
              url: {
                hash: "jx65xr",
                url: "https://today.line.me/id/article/jx65xr",
              },
              viewCount: 68,
              commentCount: 11,
              likeCount: 1,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131542733,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100603,
              title:
                "Ibunda Felicia Tissue Murka dengan Gadis Ini, Diisukan jadi Pacar Kaesang",
              publisher: "Haibunda",
              publisherId: "101062",
              badgeText: "",
              publishTimeUnix: 1615122474000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hSZoN9HDmDHVSNxpWjplzImhhDxphWx92NgFdawJZUkJ-Ak52bgZLQ3FnU0d4A0srPANGE3I3F0QqDkp0ZwVL",
              },
              url: {
                hash: "8vmEyz",
                url: "https://today.line.me/id/article/8vmEyz",
              },
              viewCount: 16,
              commentCount: 6,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131049326,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100584,
              title: "Jalur Lintas Sumatera: Penumpang Terakhir",
              publisher: "kumparan",
              publisherId: "100234",
              badgeText: "",
              publishTimeUnix: 1614850440000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hyKPOrc59JmRtNjA8Z0NZM1RgJQteWjVnCQB3ej1YeFNBBDYzV1NqUk5kKFxFUmE6BFFvAkxzeQFGVWJmUVM",
              },
              url: {
                hash: "7rk8Gr",
                url: "https://today.line.me/id/article/7rk8Gr",
              },
              viewCount: 2,
              commentCount: 14,
              likeCount: 64,
              type: 0,
              ageLimit: false,
            },
            {
              id: 95726667,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100663,
              title: "[Kata Gaul] Sudah Tahu Arti 'SPUPET'? Ini Dia Artinya",
              publisher: "Daeng_Hermanto",
              publisherId: "101828",
              badgeText: "",
              publishTimeUnix: 1584075000000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hfdYUmaoJOUtkLBFKabpGHF56OiRXQCpIABpoVTRCZ38dG3kcWRh2ekYqZnlLSX4VW0x_JEAlInoaTH0eXhl2",
              },
              url: {
                hash: "nrMpO1",
                url:
                  "https://today.line.me/id/article/Kata+Gaul+Sudah+Tahu+Arti+SPUPET+Ini+Dia+Artinya-nrMpO1",
              },
              viewCount: 1,
              commentCount: 600,
              likeCount: 55,
              type: 0,
              ageLimit: false,
            },
            {
              id: 112379648,
              source: "MANUAL",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100673,
              title:
                "[Cooking] Cara Membuat Gyoza yang Lezat untuk Cemilan Sehat",
              publisher: "LINE TODAY",
              publisherId: "100058",
              badgeText: "",
              publishTimeUnix: 1598324400000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hUFK0g_myCml2SSNKu7R1PkwfCQZFJRlqEn9bdyYnVF0MfEhtS38VWFUeUFFffU03HipFDVRNEVgJcExrTCcV",
              },
              url: {
                hash: "vMgZP0",
                url:
                  "https://today.line.me/id/article/Cooking+Cara+Membuat+Gyoza+yang+Lezat+untuk+Cemilan+Sehat-vMgZP0",
              },
              viewCount: 1,
              commentCount: 15,
              likeCount: 182,
              type: 0,
              ageLimit: false,
            },
            {
              id: 126982681,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100667,
              title: "PPKM Diperpanjang, Ini Pertimbangannya",
              publisher: "GATRAcom",
              publisherId: "102190",
              badgeText: "",
              publishTimeUnix: 1611307233000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hXtoghALlB1tSHhE29Wh4DGhIBDRhchRYNihWRQJwWWx-LxBdPntIbXEXW24sKUAFO3lNPHMcHGoqK0dYbnhI",
              },
              url: {
                hash: "ppRk0e",
                url: "https://today.line.me/id/article/ppRk0e",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
            {
              id: 127997572,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100681,
              title: "Pakar UGM: Virus Nipah Potensial Jadi Pandemi",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1612224300000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hqLzbKZzALmNHGzgc0hpRNH1NLQx0dz1gIy1_fRd1cFRrK2A9cnlmVWQddQRiK2k9KSliBWIcNVI_L2xmLHhm",
              },
              url: {
                hash: "B5ZlO6",
                url: "https://today.line.me/id/article/B5ZlO6",
              },
              viewCount: 1,
              commentCount: 2,
              likeCount: 1,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131145402,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100634,
              title:
                "Lagu Mengapa Semua Menangis Viral, Ini Lirik, Judul, dan Ceritanya",
              publisher: "CIANJURTODAY.COM",
              publisherId: "101543",
              badgeText: "",
              publishTimeUnix: 1614779525000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hv8BzxWesKRd_Az9PrlJWQEVVKnhMbzoUGzV4CS9tdyBTMTkUEWRhIVxRcHNXO25JFmRhclkDMiYHNTxAQDJh",
              },
              url: {
                hash: "1zQNj9",
                url: "https://today.line.me/id/article/1zQNj9",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131232154,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100604,
              title:
                "Indonesia, Germany Strengthen Partnership in Area of Public Infrastructure",
              publisher: "Medcom.id",
              publisherId: "100191",
              badgeText: "",
              publishTimeUnix: 1614852060000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hr0WDOtq6LR9qPTs4031SSFBrLnBZUT4cDgt8ATpTcyhGCGsaU1tkKUk9dnsQDGpBBFNge0w5Ni4SCzgcBVpk",
              },
              url: {
                hash: "kzm6Ow",
                url: "https://today.line.me/id/article/kzm6Ow",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131337175,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100627,
              title:
                "Nimo TV Training League PUBG Mobile Resmi Buka Pendaftaran!",
              publisher: "Duniaku.com",
              publisherId: "100132",
              badgeText: "",
              publishTimeUnix: 1614931500000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hQUQdsJWyDnpsHRhchpZxLVZLDRVfcR15CCtfZDxzUE1AKEl4Vi4TTE8fUExHfUkkAilJFUgYFUsUKx0tBCkT",
              },
              url: {
                hash: "qxoxGx",
                url: "https://today.line.me/id/article/qxoxGx",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
              ageLimit: false,
            },
            {
              id: 131468036,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100472,
              title:
                "Kritik Rocky Gerung Pada Pembatalan Izin Investasi Miras - ROSI",
              publisher: "KompasTV",
              publisherId: "100181",
              badgeText: "",
              publishTimeUnix: 1615037432000,
              thumbnail: {
                type: "VIDEO",
                hash:
                  "0hOlZlSpH8EENnFQZn455vFF5DEyxUeQNAAyNBXTd7TnRLIFUcUyYNdUQSG3AYIlcdDnNfJkRQTyZMcgQUCSE",
              },
              url: {
                hash: "RlgnBZ",
                url: "https://today.line.me/id/article/RlgnBZ",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
              contentType: 5,
            },
            {
              id: 131523017,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100582,
              title:
                "Singapura Haramkan Mobil Diesel 2025, Hapus Kendaraan Bensin 2040 ",
              publisher: "iNews.id",
              publisherId: "101793",
              badgeText: "",
              publishTimeUnix: 1615106580000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hzAfPcVDGJW5bKTNNwq5aOWF_JgFoRTZtPx90cAtHe1l3HGcwYhprWHgoKw13HGIwNRxtCnovPl8jEGNrNB1r",
              },
              url: {
                hash: "mx9L1w",
                url: "https://today.line.me/id/article/mx9L1w",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 0,
              type: 0,
            },
            {
              id: 131557331,
              source: "AUTO",
              status: "AVAILABLE",
              categoryName: "ALL",
              categoryId: 100609,
              title:
                "Mengerikan, Manchester United Pecundangi ManCity di Etihad",
              publisher: "VIVA.CO.ID",
              publisherId: "100324",
              badgeText: "",
              publishTimeUnix: 1615141461000,
              thumbnail: {
                type: "IMAGE",
                hash:
                  "0hoNNoetHvMGFzFiZDZO1PNklAMw5AeiNiFyBhfyN4blZfI3M3HyAtV1AVaVZddHc_HSd7AFURK1ALL3cyT3gt",
              },
              url: {
                hash: "qxENwy",
                url: "https://today.line.me/id/article/qxENwy",
              },
              viewCount: 1,
              commentCount: 1,
              likeCount: 1,
              type: 0,
            },
          ],
        },
      ],
    },
  ],
  rankingList: null,
  lastModTime: 1597417502885,
  allAdLazyloadingOn: false,
};

const HomePage = ({ loading, items, fetchArticles, tabs }: any) => {
  useEffect(() => {
    fetchArticles("/api/articles");
  }, []);

  const { categoryList = [] }: ArticlesData = items ?? {};

  return (
    <>
      <Head>
        <title>LEN TUDEI - SejutaCita Technical Test</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Main>
        <Container background="lightgray">
          <Header />

          {loading ? (
            <span>Loading</span>
          ) : (
            <>
              <Tabs items={categoryList} />
              <ArticleSection templates={mockData.templates} />
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

const mapStateToProps = (state: {
  articles: ArticlesState;
  tabs: TabsState;
}) => ({
  items: state.articles.items,
  loading: state.articles.loading,
  tabs: state.tabs,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchArticles: (url) => dispatch(fetchArticles(url)),
  openTab: () => dispatch(_openTab("TOP")),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
