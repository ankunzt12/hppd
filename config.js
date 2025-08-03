// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // Bạn có thể viết bao nhiêu câu cũng được
    // Mỗi câu nên dưới 15 chữ để hiệu ứng hiển thị đẹp nhất
    texts: [
        "Gửi tặng cho",            // Nhớ dùng dấu phẩy tiếng Anh nhé!
        "Huyền Anh đáng yêu của anh",  // Như trên...
        "Hôm nay là sinh nhật của em",
        "Đây là sinh nhật thứ 16",
        "Anh chúc cho Huyền Anh",
        "Luôn luôn xinh đẹp và hạnh phúc",
        "Tuổi mới chúc huyền anh luôn luôn vui vẻ",
        "Ăn mau chong lớn",
        "Gửi Huyền Anh",
        "Chúc mừng sinh nhật Huyền Anh 😚",
        "~",
    ],

    /**
     * Phần imgs có thể để trống, nhưng nếu muốn thêm ảnh thì phải theo đúng định dạng dưới đây:
     * "Phải đúng với nội dung trong texts ở trên": "Đường dẫn ảnh"
     * Ví dụ:
     * "em bé đáng yêu của anh": "./imgs/xiaokeai.jpg"
     *
     * Nếu không muốn hiện ảnh thì chỉ cần comment dòng đó bằng hai dấu //
     * Ví dụ dòng ảnh của "Hôm nay là sinh nhật của em" bên dưới sẽ không hiện
     * Mẹo: Ảnh nên là hình vuông hoặc gần vuông để hiển thị đẹp hơn
     */
    imgs: {
        "em bé đáng yêu của anh": "./imgs/xiaokeai.png",
        // "Hôm nay là sinh nhật của em": "./imgs/birthday.jpg",
    },

    // Dưới đây là phần mô tả nút bấm, bạn có thể thay đổi tùy thích
    desc: {
        turn_on: "Bắt đầu",
        play: "Bật nhạc",
        bannar_coming: "Màu sắc",
        balloons_flying: "Thiếu thiếu gì đó...",
        cake_fadein: "Bánh kem?",
        light_candle: "Nến chăng?",
        wish_message: "Chúc mừng sinh nhật 🎉",
        story: "Lời nhắn gửi đến em",
    }
};
