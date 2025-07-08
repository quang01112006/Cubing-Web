const cubeFacts = {
  "2x2": [
    "Kỷ lục thế giới giải 2x2 là 0.43 giây, ngang một cái chớp mắt của con người ",
    "Vì không có cạnh hay tâm, Rubik 2x2 giúp người chơi làm quen với định hướng góc và thuật toán cơ bản trước khi chuyển sang rubik khó hơn.",
    "Có thể dùng hoàn toàn công thức của 3x3 để giải khối 2x2",
    "Rubik 2x2 còn được gọi là Pocket Cube hoặc Rubik bỏ túi vì độ nhỏ gọn của mình.",
    "Tuy nhỏ bé và có vẻ đơn giản, nhưng nó cũng có tới 3,6 triệu trạng thái hoán vị khác nhau",
  ],
  "3x3": [
    "Mọi trạng thái Rubik 3x3 đều có thể giải tối đa trong 20 bước, con số này gọi là God's Number.",
    "43.252.003.274.489.856.000 là số hoán vị của một khối 3x3 ",
    "Ernő Rubik - cha đẻ của khối lập phương đã mất hơn 1 tháng để tìm ra cách giải. Hiện nay kỉ lục thế giới là 3,13s",
    "Rubik từng được chọn là “Đồ chơi của thế kỷ” bởi tạp chí Time.",
    "Rubik là một trong những món đồ chơi bán chạy nhất thế giới. Nhưng ban đầu nó được tạo ra nhằm phục vụ việc giảng dạy hình học không gian",
    "Robot giải Rubik nhanh nhất thế giới chỉ mất 0.38 giây - tên là Sub1 Reloaded",
    "Trước khi bị loại khỏi hệ thống thi đấu chính thức, từng có hạng mục “giải Rubik bằng chân” trong các giải World Cube Association.",
    "Dù có nhiều biến thể như 2x2, 4x4, 5x5… nhưng 3x3 vẫn là “vua” trong lòng cộng đồng speedcubing và người chơi phổ thông.",
  ],
  "4x4": [
    "Nếu bạn chỉ xoay các tầng ngoài, Rubik 4x4 sẽ hoạt động như một khối 3x3. Còn nếu chỉ xoay các góc, bạn có thể mô phỏng 2x2. Một khối - ba cách chơi!",
    "Được gọi là Rubik Revenge. Tên gọi này mang tính biểu tượng - như thể khối Rubik đang 'trả thù' người chơi vì đã quá tự tin sau khi chinh phục 3x3",
    "4x4 có thể gặp Parity Error - một lỗi không xuất hiện ở 3x3.",
    "Có số hoán vị là 7.4 x 10^45. nhiều hơn hàng triệu lần số hạt cát trên Trái Đất",
    "Người thiết kế ra 4x4 là Peter Sebestény, chứ không phải Ernő Rubik, dù cùng là người Hungary.",
  ],
  "5x5": [
    "Được gọi là Professor's Cube vì độ khó cao hơn, như thể chỉ những giáo sư mới đủ sức giải được ",
    "5x5 là khối lớn nhất được thiết kế chính thức bởi Ernő Rubik, nhà phát minh của khối Rubik.",
    "Độ chính xác tay và việc lật mặt cần được kiểm soát cực cao: vì các mảnh nhỏ có thể dễ kẹt, nên xoay mạnh tay như 3x3 rất dễ khiến cube bị bung.",
  ],
  "6x6": [
    "Số bước giải trung bình gấp ~3 lần 3x3. Người chơi giỏi vẫn phải mất hơn 1 phút",
    "Khối 6x6 từng bị coi là 'hỏng nhiều hơn là chơi được'. Thời đầu, 6x6 bị kẹt, lệch lớp, bung trục là chuyện thường.",
    "Khối 6x6 đầu tiên được phát minh và bán bởi hãng V-Cube, Hy Lạp – người sáng chế là Panagiotis Verdes.",
    "Rubik 6x6 dính tận 2 loại parity chính: Edge parity (giống 4x4) và Corner parity (chỉ có ở 6x6+).",
  ],
  "7x7": [
    "Khối Rubik lớn nhất được thi đấu chính thức. WCA chỉ công nhận thi đấu tối đa đến 7x7, dù ngoài đời có cả 17x17.",
    "Có 218 mảnh chuyển động. Gồm 8 góc, 150 cạnh, 60 tâm. Nhiều người dùng 7x7 để luyện sự kiên nhẫn hơn là giải tốc độ.",
    "Một cú lệch layer có thể làm 1 khối rubik hoàn chỉnh biến thành 218 mảnh độc lập, và mất hàng giờ để lắp lại.",
    "Còn gọi là super big cube. Khá nặng và mỏi tay nếu giải trong thời gian quá lâu",
  ],
  pyraminx: [
    "Dễ giải nhất trong tất cả các khối chính thức của WCA",
    "Có thể giải mà chỉ cần học duy nhất 1 công thức",
    "Vì độ dễ, Pyraminx thường được dùng để dụ người mới nhập môn speedcubing.",
  ],
  megaminx: [
    "Megaminx là họ hàng xa của 3x3 vì hoạt động dựa trên cơ chế xoay tương tự, chỉ khác là nó có 12 mặt hình ngũ giác.",
    "Có tới 12 mặt,  điều này khiến việc định hướng hơi rối với người mới, nhưng cũng rất bắt mắt khi trưng bày.",
  ],
  skewb: [
    "Xoay theo đường chéo chứ không phải theo mặt như Rubik 3x3, cảm giác khá dị với người đã quen rubik truyền thống",
    "Thuật toán của Skewb cực ít, dễ học. Một số người học giải chỉ mất 30 phút - 1 tiếng là xong",
  ],
  clock: [
    "Nó là twisty puzzle duy nhất không cần xoay mặt khối nào. Chỉ có nút bấm và xoay.",
    "Rubik's Clock hoạt động bằng 4 nút bấm + 4 bánh xoay để điều khiển các kim đồng hồ.",
    "Clock là puzzle dễ giải theo cảm giác - không cần thuật toán dài dòng",
    "Từng bị loại khỏi giải chính thức, sau đó được yêu cầu quay trở lại vì vẫn được nhiều người yêu thích.",
  ],
  fto: [
    "FTO không phải khối lập phương - nó là bát diện (octahedron)",
    "Nhiều người tưởng dễ như 3x3 vì cũng có xoay tầng giữa, nhưng FTO có parity (trạng thái sai lệch không thể hiện rõ), khiến nó khó hơn rất nhiều.",
    "Có đến 3 loại mảnh: center, edge, tip. Cần hiểu rõ để không bị 'lạc trôi' khi giải - nhiều beginner bị rối vì không phân biệt được các mảnh.",
  ],
  kilominx: [
    "Thay vì có ba tầng như Megaminx, Kilominx chỉ có hai tầng, nên còn gọi là 2x2 Megaminx.",
    "Trên Kilominx, chỉ có corner – điều này khiến nó giống 2x2 hơn là Megaminx thật sự.",
    "Luyện Kilominx giúp cải thiện khả năng định hướng không gian. Đây là bước đệm tốt để tiến tới những khối như Master Kilominx, Gigaminx, hay Teraminx khét lẹt.",
  ],
  master_tetraminx: [
    "Dù tên nghe giống Pyraminx nhưng Master Tetraminx thực chất có hình dạng của một khối tứ diện cắt, không phải là hình chóp đều như Pyraminx. Nó không có đỉnh xoay (tip) như Pyraminx",
    "Cơ chế giải gần giống một khối Rubik 3x3 bị 'xoay nghiêng', tức là nếu biết giải 3x3, bạn có thể học Master Tetraminx rất nhanh.",
  ],
  baby_fto: [
    "Cấu trúc đơn giản hơn FTO chuẩn: ít mảnh hơn, ít bước giải hơn nhưng vẫn giữ lại kiểu xoay đặc trưng theo mặt tam giác.",
    "Vì cấu trúc hình học đối xứng, nhiều người mới chơi dễ xoay sai mặt hoặc không nhận ra mảnh đã đảo ngược, gây rối hơn so với khối 3x3 thông thường.",
  ],
  gigaminx: [
    "Nhiều người gọi Gigaminx là 'nghệ thuật hình học di động' vì nó vừa đẹp, vừa thách thức trí não - như một khối kim cương với 12 mặt và hàng trăm mảnh ghép tinh xảo.",
    "Gigaminx có thể xuất hiện các lỗi như cạnh bị hoán đổi hoặc xoay sai - điều không xảy ra ở Megaminx. Bạn cần học thêm thuật toán riêng để xử lý",
  ],
};

function randomFacts() {
  let cards = document.querySelectorAll(".rubik-item");
  cards.forEach((cube) => {
    let type = cube.dataset.type;
    let arrFact = cubeFacts[type];
    let randomIdx = Math.floor(Math.random() * arrFact.length);
    cube.querySelector(".facts").innerHTML = arrFact[randomIdx];
    console.log("dataset:", cube.dataset);
    console.log("type:", cube.dataset.type);
  });
}
randomFacts();
