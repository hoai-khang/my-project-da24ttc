// 1. KHO HÀNG (Đã thêm thuộc tính 'desc' cực chất cho 10 áo Real Madrid)
const productList = [
    { id: "01", name: "Real Madrid 2011/12 Home Kit", price: 350, image: "../assets/images/rm_2011_home.jpg", productLink: "product-detail.html", desc: "Mẫu áo sân nhà mùa giải 2011/12 với các đường sọc vàng kim sang trọng. Mùa giải hoàng kim vô địch La Liga dưới thời Jose Mourinho với kỷ lục 100 điểm và 121 bàn thắng." },
    { id: "02", name: "Real Madrid 2013/14 Away Kit (Orange)", price: 350, image: "../assets/images/rm_2013_away.jpg", productLink: "product-detail.html", desc: "Bộ kit sân khách màu cam rực rỡ hiếm hoi. Gắn liền với chiến dịch chinh phục chiếc cúp Champions League thứ 10 (La Decima) lịch sử cùng tam tấu BBC." },
    { id: "03", name: "Real Madrid 2014/15 Dragon Kit", price: 500, image: "../assets/images/rm_2014_dragon.jpg", productLink: "product-detail.html", desc: "Siêu phẩm áo đấu do nhà thiết kế Yohji Yamamoto sáng tạo. Họa tiết hình rồng vương giả chìm trên nền đen tượng trưng cho sức mạnh, sự kiên cường và vinh quang." },
    { id: "04", name: "Real Madrid 2016/17 Home Kit", price: 380, image: "../assets/images/rm_2016_home.jpg", productLink: "product-detail.html", desc: "Thiết kế mang hơi hướng cổ điển với cổ áo Polo lịch lãm. Mùa giải Zinedine Zidane đưa Real Madrid trở thành đội đầu tiên bảo vệ thành công ngai vàng Champions League." },
    { id: "05", name: "Real Madrid 2017/18 Third Kit (Turquoise)", price: 400, image: "../assets/images/rm_2017_third.jpg", productLink: "product-detail.html", desc: "Mẫu áo thứ 3 màu xanh ngọc (Turquoise) độc đáo do fan thiết kế. Gắn liền với cú hat-trick vô địch Champions League liên tiếp tại đêm huyền diệu ở Kyiv." },
    { id: "06", name: "Real Madrid 2020/21 Away Kit (Pink)", price: 350, image: "../assets/images/rm_2020_away.jpg", productLink: "product-detail.html", desc: "Bộ kit sân khách màu hồng (Spring Pink) đầy táo bạo, lấy cảm hứng từ nghệ thuật đương đại và nhịp sống sôi động của thành phố Madrid." },
    { id: "07", name: "Real Madrid 2021/22 Home Kit", price: 400, image: "../assets/images/rm_2021_home.jpg", productLink: "product-detail.html", desc: "Họa tiết xoắn ốc chìm tượng trưng cho đài phun nước Cibeles, nơi bầy kền kền trắng ăn mừng chức vô địch Champions League thứ 14 thần thánh với những màn lội ngược dòng điên rồ." },
    { id: "08", name: "Real Madrid 2022/23 Third Kit (Black Purple)", price: 450, image: "../assets/images/rm_2022_third.jpg", productLink: "product-detail.html", desc: "Sự kết hợp hoàn hảo giữa nền đen hiện đại và viền tím vương giả truyền thống của hoàng gia Tây Ban Nha. Tích hợp công nghệ vải HEAT.RDY cao cấp." },
    { id: "09", name: "Real Madrid 2023/24 Away Kit (Black)", price: 450, image: "../assets/images/rm_2023_away.jpg", productLink: "product-detail.html", desc: "Thiết kế tông đen tuyền kết hợp họa tiết sóng âm chìm, tượng trưng cho tiếng cổ vũ vô tận của cộng đồng Madridistas trên toàn thế giới." },
    { id: "10", name: "Real Madrid 2024/25 Home Kit", price: 500, image: "../assets/images/rm_2024_home.jpg", productLink: "product-detail.html", desc: "Mẫu áo mới nhất chào đón dải ngân hà Galacticos 3.0 cùng Kylian Mbappe. Họa tiết răng cưa chìm mang phong cách tối giản nhưng ngập tràn khí chất nhà vua." }
];

// 2. HÀM LOAD SẢN PHẨM (Nâng cấp gom vòng lặp theo chuẩn của cô)
function loadProduct(products) 
{
    for(let i = 0; i < products.length; i++) 
    {
        addProduct_v2(products[i]);
    }
}

// 3. HÀM TẠO KHUNG SẢN PHẨM V2 
function addProduct_v2(product) 
{
    // Tạo khung ngoài cùng 
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col mb-4");
    productItem.style.flex = "0 0 20%";
    productItem.style.maxWidth = "20%";

    // Khung chứa ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image h-75 mb-2");

    // Thêm ảnh bo góc, chống méo
    const myImage = document.createElement("img");
    myImage.setAttribute("src", product.image);
    myImage.setAttribute("alt", product.name);
    myImage.setAttribute("class", "img-thumbnail img-fluid h-100 object-fit-cover");
    myImage.style.height = "220px";
    myImage.style.width = "100%";
    myImage.style.objectFit = "cover";

    productImage.appendChild(myImage);

    // Khung thông tin
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center mt-2");

    // Tên áo
    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1");
    productName.style.fontSize = "14px";
    productName.style.height = "40px";
    productName.style.overflow = "hidden";
    productName.innerText = product.name;
    productInfo.appendChild(productName);

    // Giá tiền
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-bold mb-1");
    productPrice.innerText = product.price + ".000 VND";
    productInfo.appendChild(productPrice);

    // Nút bấm chuyển sang trang chi tiết
    const productLink = document.createElement("a");
    productLink.setAttribute("href", product.productLink + "?id=" + product.id);
    productLink.setAttribute("class", "btn btn-info btn-sm");
    productLink.innerText = "Xem chi tiết";
    productInfo.appendChild(productLink);

    // Gắn hết vào item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Xuất ra web
    document.getElementById("product-list").appendChild(productItem);
}