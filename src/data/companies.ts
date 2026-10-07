import directory from "./company-directory.json";

export const companySectors = [
  "Thương mại điện tử",
  "Hàng tiêu dùng",
  "Điện tử",
  "IT – Phần mềm",
  "Ngân hàng",
  "Logistics",
  "Ô tô – Xe máy",
  "Bán lẻ",
  "Bất động sản",
  "Tài chính – Chứng khoán",
  "Bảo hiểm",
  "Giáo dục",
  "Y tế",
  "Dược phẩm",
  "Du lịch – Khách sạn",
  "Nhà hàng – F&B",
  "Sản xuất – Công nghiệp",
  "Năng lượng",
  "Viễn thông",
  "Truyền thông – Quảng cáo",
] as const;

export type CompanySector = (typeof companySectors)[number];
export interface FeaturedCompany {
  id: string;
  name: string;
  sector: CompanySector;
  description: string;
  profileUrl: string;
  logo?: string;
  website?: string;
  searchLink?: boolean;
}

// Initial entries link to verified TopCV profiles. New directory entries use
// TopCV's company search; they do not imply a verified profile or open vacancies.
// Initial marks: Simple Icons v11.15.0. Directory images: website favicons,
// retrieved through Google's favicon service and stored locally without recoloring.
export const featuredCompanies: FeaturedCompany[] = [
  {
    id: "shopee",
    name: "Shopee Việt Nam",
    sector: "Thương mại điện tử",
    description: "Khám phá môi trường làm việc trong lĩnh vực thương mại điện tử.",
    profileUrl: "https://www.topcv.vn/cong-ty/tnhh-shopee/62279.html",
  },
  {
    id: "unilever",
    name: "Unilever Việt Nam",
    sector: "Hàng tiêu dùng",
    description: "Sản phẩm chăm sóc cá nhân, gia đình và hàng tiêu dùng.",
    profileUrl: "https://www.topcv.vn/cong-ty/cong-ty-tnhh-quoc-te-unilever-viet-nam/235400.html",
  },
  {
    id: "lg",
    name: "LG Electronics Vietnam Hải Phòng",
    sector: "Điện tử",
    description: "Sản xuất và phát triển các sản phẩm điện tử.",
    profileUrl: "https://www.topcv.vn/cong-ty/lg-electronics-vietnam-hai-phong/39259.html",
  },
  {
    id: "bosch",
    name: "Bosch Global Software Technologies",
    sector: "IT – Phần mềm",
    description: "Giải pháp phần mềm, kỹ thuật và nghiên cứu công nghệ.",
    profileUrl:
      "https://www.topcv.vn/cong-ty/cong-ty-tnhh-bosch-global-software-technologies/91063.html",
  },
  {
    id: "samsung",
    name: "Samsung Electronics Việt Nam",
    sector: "Điện tử",
    description: "Công nghệ điện tử và sản xuất thiết bị truyền thông.",
    profileUrl: "https://www.topcv.vn/cong-ty/cong-ty-tnhh-samsung-electronics-viet-nam/67781.html",
  },
  {
    id: "hsbc",
    name: "HSBC",
    sector: "Ngân hàng",
    description: "Khám phá doanh nghiệp trong lĩnh vực ngân hàng.",
    profileUrl: "https://www.topcv.vn/cong-ty/hsbc/251362.html",
  },
  {
    id: "dhl",
    name: "DHL Express Vietnam",
    sector: "Logistics",
    description: "Chuyển phát nhanh và kết nối mạng lưới vận chuyển quốc tế.",
    profileUrl: "https://www.topcv.vn/cong-ty/dhl-express-vietnam/7545.html",
  },
  {
    id: "panasonic",
    name: "Panasonic Việt Nam",
    sector: "Điện tử",
    description: "Sản xuất thiết bị điện tử, điện lạnh và gia dụng.",
    profileUrl: "https://www.topcv.vn/cong-ty/cong-ty-panasonic-viet-nam/37748.html",
  },
  {
    id: "toyota",
    name: "Toyota Việt Nam",
    sector: "Ô tô – Xe máy",
    description: "Khám phá môi trường doanh nghiệp trong ngành ô tô.",
    profileUrl: "https://www.topcv.vn/cong-ty/cong-ty-o-to-toyota-viet-nam/107412.html",
  },
  {
    id: "honda",
    name: "Honda Việt Nam",
    sector: "Ô tô – Xe máy",
    description: "Sản xuất xe máy, ô tô và phát triển công nghệ di chuyển.",
    profileUrl: "https://www.topcv.vn/cong-ty/honda-viet-nam/39333.html",
  },
  ...directory.map(([name, sector, domain]): FeaturedCompany => ({
    id: domain.replaceAll(".", "-"),
    name,
    sector: sector as CompanySector,
    description: `Khám phá doanh nghiệp trong lĩnh vực ${sector.toLocaleLowerCase("vi")}.`,
    profileUrl: `https://www.topcv.vn/cong-ty/tim-kiem?keyword=${encodeURIComponent(name)}`,
    logo: ["fptretail.com.vn", "goldsunmedia.com.vn"].includes(domain)
      ? ""
      : `/images/companies/${domain.replaceAll(".", "-")}.png`,
    website: `https://${domain}`,
    searchLink: true,
  })),
];
