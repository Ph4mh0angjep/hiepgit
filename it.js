console.log('Hello World')

// đặt tên cho 1 biến luôn là danh từ
// const a ="..." là 1 biến lưu dữ liệu không bao giờ bị thay đổi 
// let b ="..." là 1 biến lưu dữ liệu có thể được thay đổi
// var c ="..." là 1 biến lưu dữ liệu có thể được thay đổi
// let b và var c khác nhau về scope

// data types (kiểu dữ liệu)
// string ="task"
// number =1,2,3....
// object ={tệp} trong kiểu dữ liệu object có thể chứa các kiểu dữ liệu như string, number, boolean(true)
// boolean là 2 kiểu dữ liệu true or false (thường sẽ hay xuất hiện trong câu điều kiện if else)
// null(là kiểu dữ liệu mà biến có giá trị trống),undefined(là kiểu dữ liệu chưa gắn giá trị cho biến)


const name=" nhoc "               (kiểu dữ liệu String)
const number= 1                   (kiểu dữ liệu Number)
const nhocac = {                  (kiểu dữ liệu Object)
    Firstname : " nhoc ",         (kiểu dữ liệu String)
    Lastname : " ac ",
    Age : 26,                     (kiểu dữ liệu Number)
    Male : true                   (kiểu dữ liệu Boolean)         
}     

let undifinedtest= undefined ;    (kiểu dữ liệu undefined) let là 1 biến, undifinedtesttest là tên biến, undefined là chưa được gán giá trị cho biến. 
let nulltest = null;              (kiểu dữ liệu null) let là 1 biến, nulltest là tên biến, null là hiển thị cho giá trị trống của biến.


// console.log(...) là câu lệnh để lưu lại giá trị của biến
console.log(name)
console.log(number)
console.log(nhocac)               => có thể lưu giá trị của những biến khác vào chung câu lệnh của Object, VD: console.log({nhocac, name, number, undefinedtest, nulltest})
console.log(undefinedtest)
console.log(nulltest)


// condition (câu điều kiện)
// if else (nếu{if}...mà nếu{else if}...còn không{else}...)(khi biến đã hoàn thành thì sẽ trả lại kiểu dữ liệu boolean{true or false})
// switch case ( switch{key} là giá trị muốn so của biến, case{valua} là tham số muốn so của giá trị,)

if (nhocac.Age == 26) {               <= (nhocac.Age == 26)-> {nhocac là tên của biến muốn so} {.age == 26 giá trị của biến muốn so}  
    console.log("nhoc ac 26")         <= lưu lại tham số của lệnh if, nếu kh thỏa điều kiện thì sẽ xét tiếp lệnh else if và else. 
                                        nếu console.log(nhocac.Age == 26) thì sẽ trả lại kiểu dữ liệu Boolean(true) vì giá trị của console.log đúng với giá trị của biến muốn so nên lệnh if đúng và kh cần so lệnh else if, else.
} else if (nhocac.Age == 27) {
    console.log("nhoc ac 27")

} else {
    console.log("khong biet")

}

switch (nhocac.Age) {                 <=  (hoanghiep.Age) {nhocac tên của biến muốn so} {age là giá trị của biến muốn so} 
  case 26:                            <=  26 là tham số của giá trị muốn so.
  console.log("nhoc ac 26")
        break;
  case 27:
    console.log("nhoc ac 27")
        break;
  default:
        console.log("khong biet")
        break;
}


// function (câu chức năng)(tên của function phải là 1 động từ)

function ShownhocacInfo(renderingnhocac) {          <= ShownhocacInfo là tên của function, (renderingnhocac) là thông số của tên function{ShownhocacInfo}
    console.log(renderingnhocac)                    <= lưu lại tên của function.
} 
ShownhocacInfo(nhocac, undefinedtest, nulltest)     <= ShownhocacInfo() gán câu lệnh để lưu lại giá trị biến muốn show, {nhocac, undefinedtest, nulltest} là các biến muốn show.


// array (là nơi có thể chứa nhiều object khác nhau)(1 danh sách chứa nhiều dữ liệu)(giá trị trong array sẽ đc đếm bắt đầu từ số 0)
// code : const,let,var arr= [...]
//        arr.push(...) <-- thêm 1 giá trị cho array
//        ShowObjectInfo(arr) <-- gán câu lệnh để coi dữ liệu của array
//        ShowObjectInfo(arr[...]) <-- gán câu lệnh để lấy dữ liệu trong array
//        ShowObjectInfo(arr.indexOf(...)) <-- tìm 1 giá trị trong array nằm ở vị trí nào(nếu kết quả là 0 thì giá trị đó nằm trong array, nếu =-1 thì ngược lại)

const arr= ["nhoc", 0, 1, 2, 3];                    => là 1 biến của Array. 
arr.push("ly")                                      => câu lệnh để thêm 1 giá trị cho biến Array -> ["nhoc", 0, 1, 2, 3, "ly"]
ShowObjectInfo(arr)                                 => gán lâu lệnh để show tất cả dữ liệu trong biến Array.
ShowObjectInfo(arr[3])                              => gán câu lệnh để coi vị trí 3 là giá trị gì-> 2, giá trị trong array sẽ đc đếm bắt đầu từ số 0.
ShowObjectInfo(arr.indexOf("ly"))                   => gán câu lệnh để coi giá trị "ly" nằm ở vị trí số mấy trong Array.  


// loop (vòng lặp)
// for, while, do while (dùng để đếm giá trị trong array)
// code : for (let index = giá trị đầu tiên trong array; index < giá trị cuối cùng trong array; index++{+1}, index+=2{+2})
//            {ShowObjectInfo(arr[index])} <-- gán câu lệnh để đếm dữ liệu trong array
// code : let index = let index = giá trị đầu tiên trong array
//        while (index < giá trị cuối cùng trong array)  <-- check điều kiện rồi làm việc 
//        {ShowObjectInfo(arr[index]); index++} <-- gán câu lệnh để đếm giá trị trong array
// code : let index = let index = giá trị đầu tiên trong array
//        do {ShowObjectInfo(arr[index]); index++}

for (let index = 0; index<6; index++)      => xét 1 biến để bắt đầu đếm dữ liệu trong Array, index=0 là giá trị đầu tiên, index<6 là điều kiện để đếm những giá trị nhỏ hơn 6, index++ là chức năng đếm theo trình tự +1 đơn vị dữ liệu.
{ShowObjectInfo(arr[index])}               => gán câu lệnh để đếm giá trị trong for. 

let index = 0                              => xét 1 biến để bắt đầu đếm dữ liệu trong Array, index=0 là giá trị đầu tiên.
while (index<6)                            => là điều kiện để đếm những giá trị nhỏ hơn 6.
{ShowObjectInfo(arr[index]); index++}      => gán câu lệnh để đếm giá trị của câu lệnh while.

let index = 0                              => xét 1 biến để bắt đầu đếm dữ liệu trong Array, index=0 là giá trị đầu tiên.
do {ShowObjectInfo(arr[index]); index++}   => lảm xong mới check điều kiện while, gán câu lệnh để đếm giá trị của câu lệnh do while.
while (index<6)                            => là điều kiện để đếm những giá trị nhỏ hơn 6.

// index++ và ++index khác nhau chỗ nào

let index = 3
let test = index++                         => test=3 vì biến sẽ hoạt động trước khi index++ được cộng vào, nếu muốn test=4 thì biến sẽ là (let test = ++index) ++index sẽ cộng vào trước khi biến hoạt động.
ShowObjectInfo(test)


// cách để biến đổi giá trị 2 số cho nhau 

let num1 = 5 
let num2 = 6

// cách 1: đặt 1 biến tạm là temp = num1 or num2

let temp = num1 =>temp = 5
num2 = temp => num2 = 5
num1 = num2 => num1 = 6
=> num1 = 6, num2 = 5

// cách 2: phép cộng
// A = A + B
// B = A - B
// A = A - B
num1 = num1 + num2 => num1 = 5 + 6 = 11
num2 = num1 - num2 => num2 = 11 - 6 = 5
num1 = num1 - num2 => num1 = 11 - 5 = 6
=> num1 = 6, num2 = 5

// cách 3: phép so (trong phép so 2 bit giống nhau thì = 0, khác nhau thì = 1)

num1 = 5 ( trong số nhị phân thì 5 = 1001 )
num2 = 6 ( trong số nhị phân thì 6 = 1010 )

num1^=num2^=num1^=num2 => (num1^=num2)=num1, (num2^=num1^=num2)=num2, (num1^=num2^=num1^=num2)=num1  { ^= là phép so, công thúc của phép so }
// tính từ sau ra trước các hàm só trên bằng phép so :

// (num1^=num2) = num1 => 1001    (num2^=num1^=num2) = num2 => 1010    (num1^=num2^=num1^=num2) = num1 => 0011
//                        1010                                 0011                                       1001             
//                 num1 = 0011                          num2 = 1001                                num1 = 1010

//  => num1 = 1010 = 6
//  => num2 = 1001 = 5

