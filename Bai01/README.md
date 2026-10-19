| Trường hợp kiểm thử | Dữ liệu đầu vào                                           | Kết quả sai thực tế                              | Kết quả đúng mong đợi                                  |
| ------------------- | --------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| Nợ đúng 3 ngày      | `daysOverdue = 3`, `planTier = FAMILY`, `deviceLimit = 5` | Bị hạ xuống `FREE`, `deviceLimit = 1`, `EXPIRED` | Giữ `FAMILY`, `deviceLimit = 5`, chuyển `GRACE_PERIOD` |
| Nợ quá 3 ngày       | `daysOverdue = 4`, `planTier = FAMILY`, `deviceLimit = 5` | `FREE`, `deviceLimit = 1`, `EXPIRED`             | `FREE`, `deviceLimit = 1`, `EXPIRED`                   |
