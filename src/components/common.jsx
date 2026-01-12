export const globalConfig = {
    selectedBundle: {
        id: 1, // Mặc định gói 2
        title: "Buy 2 Get 1 Free",
        price: "$63.92"
    },
    // Bạn có thể thêm các biến khác ở đây
    activeOption: 0,
    isActivePopup: false,
    subscribers: [], 
    subscribe(callback) {
        this.subscribers.push(callback);
    },
    publish(newData) {
        Object.assign(this, newData); // Cập nhật dữ liệu mới vào globalConfig
        this.subscribers.forEach(cb => cb(this)); // Thông báo cho tất cả các nơi
    }
};