# Cài đặt dự án Mobile-Stores (React + Vite)

## 1.Yêu cầu hệ thống:

- Hệ điều hành: Windows: 10 trở lên, macOS: Mojave trở lên, Linux: Ubuntu 18.04 LTS trở lên, Fedora 34 trở lên, Debian 11 "bullseye" trở lên
- Node.js: Phiên bản 16 trở lên
- npm hoặc yarn: Phiên bản mới nhất

## 2.Hướng dẫn cài đặt:

### 2.1.Cài đặt Node.js:

- Tải xuống và cài đặt Node.js từ trang web chính thức: `https://nodejs.org/en/download`
- Kiểm tra cài đặt bằng cách chạy lệnh node -v trong terminal

### 2.2.Cài đặt npm hoặc yarn

### 2.2.1.Cài đặt npm

npm là công cụ quản lý package mặc định đi kèm với Node.js. Tuy nhiên, phiên bản npm đi kèm với Node.js có thể cũ. Nên cài đặt phiên bản npm mới nhất để có hiệu suất tốt nhất

Trên Windows:

- Mở PowerShell với quyền quản trị viên
- Chạy lệnh sau: `npm install -g npm`

Trên macOS hoặc Linux:

- Mở terminal
- Chạy lệnh sau: `sudo npm install -g npm`

### 2.2.2.Cài đặt yarn

yarn là công cụ quản lý package thay thế cho npm, có tốc độ cài đặt nhanh hơn và một số tính năng khác

Trên Windows:

- Tải xuống trình cài đặt yarn từ `https://classic.yarnpkg.com/lang/en/docs/install/`
- Chạy trình cài đặt và làm theo hướng dẫn trên màn hình

Trên macOS hoặc Linux:

- Mở terminal
- Chạy lệnh sau: `curl -sSL https://dl.yarnpkg.com/install.sh | bash -s -- --version latest`

### 2.3.Clone dự án:

- Mở terminal và di chuyển đến thư mục chứa dự án.
- Clone dự án từ kho lưu trữ GitHub bằng lệnh sau: `git clone https://github.com/ntgiang01012023/Mobile-Stores.git`

### 2.4.Cài đặt dependencies:

- Di chuyển vào thư mục dự án vừa clone.
- Chạy lệnh sau để cài đặt dependencies cần thiết: `npm install`

### 2.5.Chạy dự án:

- Chạy lệnh sau để khởi động server phát triển: `npm run dev`
- Mở trình duyệt và truy cập vào địa chỉ `http://localhost:4200/` để xem dự án
