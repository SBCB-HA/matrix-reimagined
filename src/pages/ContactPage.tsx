import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/site";

export function ContactPage() {
  const [prepared, setPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = `Họ và tên: ${fields.get("name")}\nEmail: ${fields.get("email")}\nDoanh nghiệp: ${fields.get("company") || "Chưa cung cấp"}\n\n${fields.get("message")}`;
    const subject = `Liên hệ Matrix Holding — ${fields.get("topic")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <PageShell
      eyebrow="Liên hệ"
      title="Mọi kết nối bắt đầu từ một cuộc trao đổi."
      description="Chia sẻ nhu cầu của bạn để cùng tìm hướng kết nối phù hợp trong hệ sinh thái Matrix."
    >
      <section className="section">
        <Container>
          <div className="contact-page-grid">
            <div className="contact-details">
              <p className="eyebrow">Matrix Holding</p>
              <h2>Cùng mở ra cơ hội mới.</h2>
              <p>Liên hệ trực tiếp hoặc chuẩn bị email bằng biểu mẫu bên cạnh.</p>
              <a href={`mailto:${contact.email}`}>
                <Mail />
                <span>
                  <small>Email</small>
                  {contact.email}
                </span>
              </a>
              <a href={contact.phoneHref}>
                <Phone />
                <span>
                  <small>Điện thoại</small>
                  {contact.phone}
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Địa chỉ</small>
                  {contact.address}
                </span>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={prepareEmail}
              onChange={() => setPrepared(false)}
            >
              <h2>Bạn muốn trao đổi điều gì?</h2>
              <div className="form-row">
                <label>
                  Họ và tên *
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Họ tên của bạn"
                  />
                </label>
                <label>
                  Email *
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    placeholder="ban@doanhnghiep.vn"
                  />
                </label>
              </div>
              <label>
                Doanh nghiệp
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength={200}
                  placeholder="Tên doanh nghiệp (nếu có)"
                />
              </label>
              <label>
                Nội dung trao đổi
                <select name="topic" defaultValue="Hợp tác kinh doanh">
                  <option>Hợp tác kinh doanh</option>
                  <option>Kết nối đầu tư</option>
                  <option>Dịch vụ doanh nghiệp</option>
                  <option>Cơ hội nghề nghiệp</option>
                  <option>Nội dung khác</option>
                </select>
              </label>
              <label>
                Lời nhắn *
                <textarea
                  name="message"
                  rows={5}
                  required
                  maxLength={3000}
                  placeholder="Giới thiệu ngắn về nhu cầu của bạn…"
                />
              </label>
              <p className="form-note">
                Biểu mẫu mở ứng dụng email với nội dung đã điền. Bạn kiểm tra và gửi email để hoàn
                tất liên hệ.
              </p>
              <button className="button button-primary" type="submit">
                Soạn email liên hệ <ArrowUpRight size={18} />
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
