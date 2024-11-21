function toggleCollapse(featureId) {
  const feature = document.getElementById(`feature${featureId}`);
  feature.classList.toggle("collapsed");
}

//Tạo mảng
let numbers = [];

function addNumber() {
  const input = document.getElementById("inputNumber").value * 1;

  // Kiểm tra nếu nhập vào là một số hợp lệ
  if (!input || isNaN(input)) {
    alert("Vui lòng nhập một số hợp lệ!");
    return;
  }
  numbers.push(parseFloat(input));

  const numberList = document.getElementById("numberList");
  numberList.textContent = numbers.join(" ; ");
  document.getElementById("inputNumber").value = "";
}

// 1. Tổng các số dương
function calculateSumPositive() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  const result = document.getElementById("resultSumPositive");
  result.textContent = `Tổng các số dương là: ${sum}`;
}

// 2. Đếm số dương
function calculateCountPositive() {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  const result = document.getElementById("resultCountPositive");
  result.textContent = `Số lượng số dương là: ${count}`;
}

//3. Tìm số nhỏ nhất
function findMinNumber() {
  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    minNumber = Math.min(minNumber, numbers[i]);
  }

  const result = document.getElementById("resultFindMin");
  result.textContent = `Số nhỏ nhất trong mảng là: ${minNumber}`;
}

//4. Tìm số dương nhỏ nhất
function findMinPositive() {

    let minPositive = null;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        // Nếu đây là số dương đầu tiên hoặc nhỏ hơn số dương nhỏ nhất hiện tại
        if (minPositive === null || numbers[i] < minPositive) {
          minPositive = numbers[i];
        }
      }
    }

    const result = document.getElementById("resultFindMinPositive");
    result.textContent = `Số dương nhỏ nhất trong mảng là: ${minPositive}`;
}

//5. Tìm số chẵn cuối cùng của mảng 
function findLastEvenNumber() {

    for (let i = numbers.length - 1; i >= 0; i--) {

        if (numbers[i] % 2 === 0) {
            const result = document.getElementById("resultFindLastEven");
            result.textContent = `Số chẵn cuối cùng trong mảng là: ${numbers[i]}`;
            return;
        }
    }

    const result = document.getElementById("resultFindLastEven");
    result.textContent = "Không có số chẵn trong mảng!";
}

//6. Đổi chổ 2 số
function swapValues() {
  const index1 = document.getElementById("swapIndex1").value*1;
  const index2 = document.getElementById("swapIndex2").value*1;

  // Đổi chỗ giá trị tại 2 vị trí trong mảng
  const temp = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = temp;

  const result = document.getElementById("resultSwap");
  result.textContent = `Mảng sau khi đổi chỗ: ${numbers.join(" ; ")}`;
}


//7. Sắp xếp tăng dần
function sortArrayAscending() {
  if (numbers.length === 0) {
      alert("Mảng rỗng, không thể sắp xếp!");
      return;
  }

  numbers.sort((a, b) => a - b);

  const result = document.getElementById("resultSortAscending");
  result.textContent = `Mảng sau khi sắp xếp tăng dần: ${numbers.join(" ; ")}`;
}

//8.1 Hàm kiểm tra số nguyên tố
function isPrime(number) {
  if (number <= 1) 
    return false; 
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) 
        return false;
  }
  return true; // Là số nguyên tố
}

//8.2 Hàm tìm số nguyên tố đầu tiên trong mảng
function findFirstPrime() {

  if (numbers.length === 0) {
      alert("Mảng rỗng, không thể tìm số nguyên tố đầu tiên!");
      return;
  }

  let firstPrime = null;

  for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
          firstPrime = numbers[i];
          break; 
      }
  }

  const result = document.getElementById("resultFindFirstPrime");
  if (firstPrime !== null) {
      result.textContent = `Số nguyên tố đầu tiên là: ${firstPrime}`;
  } else {
      result.textContent = `Không có số nguyên tố nào trong mảng.`;
  }
}

//9. Đếm số nguyên trong mảng
function countIntegers() {
  
  let count = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            count++; 
        }
    }

  const result = document.getElementById("resultCountIntegerInFloatArray");
  result.textContent = `Số lượng số nguyên trong mảng là: ${count}`;
}

//10. So sánh số lượng số dương - âm
function comparePositiveAndNegative() {
  let positiveCount = 0; 
  let negativeCount = 0; 

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
          positiveCount++; 
      } else if (numbers[i] < 0) {
          negativeCount++; 
      }
  }

  // So sánh và tạo thông báo kết quả
  let content = '';
  if (positiveCount > negativeCount) {
      content = `Số lượng số dương (${positiveCount}) nhiều hơn số lượng số âm (${negativeCount}).`;
  } else if (positiveCount < negativeCount) {
      content = `Số lượng số âm (${negativeCount}) nhiều hơn số lượng số dương (${positiveCount}).`;
  } else {
      content = `Số lượng số dương (${positiveCount}) bằng số lượng số âm (${negativeCount}).`;
  }

  const result = document.getElementById("resultComparePositiveNegative");
  result.textContent = content;
}
