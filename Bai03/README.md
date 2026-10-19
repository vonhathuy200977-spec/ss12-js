| Tiêu chí                 | Monolithic Switch-Case                     | Modular Function Architecture                  |
| ------------------------ | ------------------------------------------ | ---------------------------------------------- |
| Độ dài `switch-case`     | Rất dài, mỗi `case` chứa nhiều logic       | Ngắn, mỗi `case` chủ yếu gọi 1 hàm             |
| Khả năng đọc hiểu        | Khó đọc khi chức năng tăng                 | Dễ đọc, dễ theo dõi                            |
| Bảo trì                  | Khó sửa, dễ ảnh hưởng chức năng khác       | Sửa từng hàm độc lập                           |
| Tái sử dụng              | Thấp, logic bị gắn với CLI                 | Cao, hàm có thể dùng lại                       |
| Unit Test                | Khó kiểm thử riêng từng chức năng          | Dễ test từng hàm                               |
| Mở rộng 5 → 20 chức năng | `switch-case` phình to nhanh               | Chỉ cần thêm hàm và thêm `case`                |
| SRP                      | Vi phạm vì một `case` làm nhiều việc       | Tuân thủ tốt hơn vì mỗi hàm có một trách nhiệm |
| Debug                    | Khó xác định lỗi                           | Dễ xác định lỗi nằm ở hàm nào                  |
| Trade-off                | Viết ban đầu có vẻ nhanh nhưng khó bảo trì | Cần thiết kế nhiều hàm hơn nhưng dễ mở rộng    |
