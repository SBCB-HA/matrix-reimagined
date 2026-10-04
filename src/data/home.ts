const networkImage = "/images/editorial/technology.webp";
const connectImage = "/images/editorial/meeting.webp";
const venturesImage = "/images/editorial/city.webp";
import type { CompanyItem, EcosystemItem, FaqItem, NewsItem } from "@/types";

export const navigation = [
  "Trang chủ",
  "Giới thiệu",
  "Hệ sinh thái",
  "Tin tức",
  "Tuyển dụng",
  "Liên hệ",
];

export const ecosystem: EcosystemItem[] = [
  {
    name: "MATRIX NETWORK",
    role: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.",
    image: networkImage,
  },
  {
    name: "MATRIX CONNECT",
    role: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.",
    image: connectImage,
  },
  {
    name: "MATRIX VENTURES",
    role: "Thành viên của Matrix Holding",
    description:
      "Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.",
    image: venturesImage,
  },
  {
    name: "MATRIX ACADEMY",
    role: "Thành viên của Matrix Holding",
    description:
      "Hệ sinh thái đào tạo tinh hoa, phát triển kỹ năng, quản trị và năng lực thực thi cho đội ngũ.",
    image: "/images/editorial/careers-team.webp",
  },
];

export const news: NewsItem[] = [
  {
    date: "26/09/2026",
    title: "Matrix Holding: Từ khát vọng khởi nghiệp đến hệ sinh thái kinh doanh đa ngành",
    featured: true,
  },
  {
    date: "26/09/2026",
    title: "Matrix Network: Hệ sinh thái dịch vụ dành cho doanh nghiệp Việt Nam",
  },
  { date: "18/09/2026", title: "Matrix Capital và cộng đồng kết nối đầu tư Việt Nam" },
  { date: "18/09/2026", title: "Matrix Community và cộng đồng kết nối kinh doanh Việt Nam" },
];

export const companies: CompanyItem[] = [
  {
    name: "CÔNG TY TNHH MATRIX HOLDING",
    field: "Công ty trung tâm quản trị, kết nối và phát triển toàn bộ hệ sinh thái Matrix Holding.",
  },
  { name: "MATRIX NETWORK", field: "Dịch vụ doanh nghiệp" },
  { name: "MATRIX CONNECT", field: "Kết nối doanh nghiệp" },
  { name: "MATRIX VENTURES", field: "Đầu tư và đổi mới" },
  { name: "MATRIX STRATEGY", field: "Chiến lược" },
  { name: "MATRIX RESEARCH", field: "Nghiên cứu" },
  { name: "MATRIX LEGAL", field: "Pháp lý" },
  { name: "MATRIX FINANCE", field: "Tài chính" },
  { name: "MATRIX ACCOUNTING", field: "Kế toán" },
];

export const faqs: FaqItem[] = [
  {
    question: "MATRIX HOLDING LÀ DOANH NGHIỆP GÌ?",
    answer:
      "Matrix Holding là doanh nghiệp hoạt động theo mô hình hệ sinh thái khép kín, giữ vai trò là công ty mẹ, chịu trách nhiệm quản trị, vận hành và điều phối các hoạt động kinh doanh, giúp các công ty thành viên có đầy đủ nguồn lực để phát triển dài hạn.",
  },
  {
    question: "MATRIX HOLDING HOẠT ĐỘNG TRONG NHỮNG LĨNH VỰC NÀO?",
    answer:
      "Matrix Holding hoạt động trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh. Đồng thời, kiến tạo môi trường để ươm mầm, nuôi dưỡng và thúc đẩy sự phát triển của những ý tưởng kinh doanh tiềm năng.",
  },
  {
    question: "MATRIX HOLDING CUNG CẤP SẢN PHẨM, DỊCH VỤ GÌ?",
    answer:
      "Matrix Holding không trực tiếp kinh doanh bất kỳ sản phẩm hay dịch vụ cụ thể nào. Chúng tôi tập trung vào hoạt động nghiên cứu thị trường chuyên sâu nhằm xây dựng những chiến lược và mô hình kinh doanh phù hợp với từng lĩnh vực.",
  },
  {
    question: "MATRIX HOLDING ĐƯỢC THÀNH LẬP KHI NÀO?",
    answer:
      "Matrix Holding được chính thức ra đời và hoàn thiện thủ tục pháp lý năm 2023, hướng đến mục tiêu đồng hành cùng các doanh nghiệp trên hành trình xây dựng và phát triển thông qua các công ty cung cấp dịch vụ, các cộng đồng kết nối kinh doanh và đầu tư.",
  },
  {
    question: "CHỦ TỊCH CỦA MATRIX HOLDING LÀ AI?",
    answer:
      "Chủ tịch của Matrix Holding là Hồ Anh Tuấn – một doanh nhân trẻ với khát vọng trở thành người dẫn đường cho thế hệ doanh nhân trẻ khởi nghiệp, kiến tạo một môi trường kinh doanh minh bạch, hiệu quả và bền vững.",
  },
];
