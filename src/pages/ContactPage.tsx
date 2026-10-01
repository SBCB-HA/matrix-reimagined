import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/site";

export function ContactPage() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Họ và tên: ${fields.get("name")}`,
      `Doanh nghiệp: ${fields.get("company") || "Chưa cung cấp"}`,
      `Email: ${fields.get("email")}`,
      `Số điện thoại: ${fields.get("phone") || "Chưa cung cấp"}`,
      "",
      "Nội dung trao đổi:",
      fields.get("message"),
    ].join("\n");
    const subject = `Liên hệ hợp tác từ ${fields.get("name")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <PageShell
      eyebrow="Liên hệ Matrix Holding"
      title="Cùng kiến tạo những cơ hội hợp tác giá trị."
      description="Hãy để lại thông tin hoặc liên hệ trực tiếp. Đội ngũ Matrix Holding sẵn sàng trao đổi về nhu cầu, nguồn lực và phương án hợp tác phù hợp."
    >
      <section className="section">
        <Container>
          <div className="contact-quick" data-reveal>
            <p className="eyebrow">Kết nối nhanh</p>
            <a href={`mailto:${contact.email}`}>
              <Mail size={20} />
              {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <Phone size={20} />
              {contact.phone}
            </a>
          </div>
          <div className="contact-page-grid">
            <aside>
              <div className="contact-details" data-reveal>
                <p className="eyebrow">Thông tin liên hệ</p>
                <h2>Gặp gỡ và kết nối cùng chúng tôi.</h2>
                <p>
                  Thông tin được tiếp nhận để phục vụ việc trao đổi hợp tác. Chúng tôi tôn trọng và
                  bảo mật thông tin của bạn.
                </p>
              </div>
              <div className="contact-office" data-reveal>
                <div>
                  <MapPin size={22} />
                  <div>
                    <h3>Văn phòng Matrix Holding</h3>
                    <p>{contact.address}</p>
                  </div>
                </div>
                <iframe
                  title="Bản đồ văn phòng Matrix Holding"
                  src="https://www.google.com/maps?q=KDT%20Bac%20Linh%20Dam%2C%20Phuong%20Hoang%20Liet%2C%20Ha%20Noi&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=KDT+Bac+Linh+Dam+Phuong+Hoang+Liet+Ha+Noi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở Google Maps để chỉ đường <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="contact-privacy" data-reveal>
                <ShieldCheck size={22} />
                Thông tin bạn gửi chỉ được sử dụng để phản hồi yêu cầu liên hệ và xây dựng phương án
                hợp tác.
              </p>
            </aside>
            <form
              className="contact-form"
              data-reveal
              onSubmit={prepareEmail}
              onChange={() => setPrepared(false)}
            >
              <p className="eyebrow">Trao đổi hợp tác</p>
              <h2>Gửi thông tin cho Matrix Holding</h2>
              <div className="form-row">
                <label>
                  Họ và tên *
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Nguyễn Văn A"
                  />
                </label>
                <label>
                  Doanh nghiệp
                  <input
                    name="company"
                    autoComplete="organization"
                    maxLength={200}
                    placeholder="Tên doanh nghiệp của bạn"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    placeholder="email@company.com"
                  />
                </label>
                <label>
                  Số điện thoại
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    placeholder="09xx xxx xxx"
                  />
                </label>
              </div>
              <label>
                Nội dung cần trao đổi *
                <textarea
                  name="message"
                  rows={6}
                  required
                  maxLength={3000}
                  placeholder="Chia sẻ ngắn về nhu cầu hoặc đề xuất hợp tác của bạn."
                />
              </label>
              <p className="form-note">
                Sau khi bấm gửi, ứng dụng email của bạn sẽ mở sẵn với thông tin liên hệ đã điền.
              </p>
              <button className="button button-primary" type="submit">
                Gửi yêu cầu liên hệ <ArrowUpRight size={18} />
              </button>
              {prepared && (
                <p className="form-feedback" role="status">
                  Nội dung email đã được chuẩn bị. Nếu ứng dụng email chưa mở, bạn có thể gửi trực
                  tiếp tới {contact.email}.
                </p>
              )}
            </form>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
