const productList = [
    { id: "01", name: "Real Madrid 2011/12 Home Kit", price: 350, image: "../assets/images/rm_2011_home.jpg", productLink: "product-detail.html" },
    { id: "02", name: "Real Madrid 2013/14 Away Kit (Orange)", price: 350, image: "../assets/images/rm_2013_away.jpg", productLink: "product-detail.html" },
    { id: "03", name: "Real Madrid 2014/15 Dragon Kit", price: 500, image: "../assets/images/rm_2014_dragon.jpg", productLink: "product-detail.html" },
    { id: "04", name: "Real Madrid 2016/17 Home Kit", price: 380, image: "../assets/images/rm_2016_home.jpg", productLink: "product-detail.html" },
    { id: "05", name: "Real Madrid 2017/18 Third Kit (Turquoise)", price: 400, image: "../assets/images/rm_2017_third.jpg", productLink: "product-detail.html" },
    { id: "06", name: "Real Madrid 2020/21 Away Kit (Pink)", price: 350, image: "../assets/images/rm_2020_away.jpg", productLink: "product-detail.html" },
    { id: "07", name: "Real Madrid 2021/22 Home Kit", price: 400, image: "../assets/images/rm_2021_home.jpg", productLink: "product-detail.html" },
    { id: "08", name: "Real Madrid 2022/23 Third Kit (Black Purple)", price: 450, image: "../assets/images/rm_2022_third.jpg", productLink: "product-detail.html" },
    { id: "09", name: "Real Madrid 2023/24 Away Kit (Black)", price: 450, image: "../assets/images/rm_2023_away.jpg", productLink: "product-detail.html" },
    { id: "10", name: "Real Madrid 2024/25 Home Kit", price: 500, image: "../assets/images/rm_2024_home.jpg", productLink: "product-detail.html" }
];

function addProduct(id, name, price, image, hyperLink) 
{
    // 1. TẠO KHUNG SẢN PHẨM 
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col mb-4");
    productItem.style.flex = "0 0 20%";
    productItem.style.maxWidth = "20%";
    

    // 2. TẠO KHUNG CHỨA ẢNH
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image mb-2");

    // Thêm ảnh (khóa objectFit cover để ảnh luôn vuông đẹp, không bị kéo giãn)
    const myImage = document.createElement("img");
    myImage.setAttribute("src", image);
    myImage.setAttribute("alt", name);
    myImage.setAttribute("class", "img-thumbnail img-fluid");
    myImage.style.height = "220px"; // Tinh chỉnh chiều cao cho cân đối với hàng 5
    myImage.style.width = "100%"; 
    myImage.style.objectFit = "cover";

    productImage.appendChild(myImage);

    // 3. TẠO KHUNG THÔNG TIN CANH GIỮA
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center");

    // Tên áo
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.style.fontWeight = "bold";
    productName.style.fontSize = "14px"; // Thu nhỏ font chữ một xíu cho gọn
    productName.style.height = "40px"; // Khóa chiều cao 2 dòng để nút bấm thẳng hàng
    productName.style.overflow = "hidden";
    productName.appendChild(productNameText);
    productInfo.appendChild(productName);

    // Giá tiền (Đổi sang VND)
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price + ".000 VND");
    productPrice.setAttribute("class", "text-danger font-weight-bolder");
    productPrice.appendChild(productPriceText);
    productInfo.appendChild(productPrice);

    // Nút bấm xanh
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.setAttribute("href", hyperLink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm"); 
    productLink.appendChild(productLinkText);
    productInfo.appendChild(productLink);

    // 4. GẮN VÀO GIAO DIỆN
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);
    document.getElementById("product-list").appendChild(productItem);
}