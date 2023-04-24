export const metadata = {
  title: 'Nhà hàng Cheen',
  description:
    'Chúng tôi tự hào là một trong những nhà hàng hàng đầu trong khu vực Phan Văn Trị Gò Vấp, với đội ngũ đầu bếp tài năng và đội ngũ nhân viên phục vụ chuyên nghiệp. Chúng tôi mang đến cho thực khách một trải nghiệm ẩm thực đặc biệt, với những món ăn tinh túy được chế biến từ những nguyên liệu tươi ngon nhất.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
