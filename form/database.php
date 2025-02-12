<?php
$servername = "localhost";
$username = "root";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("連線失敗: " . $conn->connect_error);
}

// 取得表單數據
$name = $_POST['name'];
$id_number = $_POST['id_number'];
$signature = $_POST['signature'];

// 轉換電子簽章 (Base64 to Binary)
$signature = str_replace('data:image/png;base64,', '', $signature);
$signature = base64_decode($signature);

// 儲存簽章到本地
$signatureFilePath = "signatures/" . $id_number . ".png";
file_put_contents($signatureFilePath, $signature);

// 處理 Word 檔案
$word_file_name = basename($_FILES["word_file"]["name"]);
$word_file_path = "uploads/" . $word_file_name;

if (!move_uploaded_file($_FILES["word_file"]["tmp_name"], $word_file_path)) {
    die("Word 檔案上傳失敗");
}

// 儲存數據到 MySQL
$stmt = $conn->prepare("INSERT INTO users (name, id_number, signature, word_file) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $id_number, $signature, $word_file_path);

if ($stmt->execute()) {
    echo "資料儲存成功";
} else {
    echo "儲存失敗: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
