// Sample questions data
const questions = [
{
    question: "Mẫu form chung cho toàn bộ câu hỏi",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Specific situation from the question, e.g., 'Saving money to buy an important item']</strong></span>. Although at first, I felt <span style='color:red;'><strong>[Describe your emotions or difficulties]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[Describe feelings of success or the lesson learned]</strong></span>.<br><br>" +
    "Đã có một lần tôi gặp phải một tình huống đặc biệt, nơi tôi phải đưa ra quyết định hoặc thực hiện một hành động quan trọng. <span style='color:red;'><strong>[Tình huống cụ thể từ câu hỏi, ví dụ: 'Tiết kiệm tiền để mua một món đồ quan trọng']</strong></span>. Mặc dù lúc đầu tôi cảm thấy <span style='color:red;'><strong>[miêu tả cảm xúc hoặc khó khăn]</strong></span>, nhưng tôi đã quyết định tiếp tục và làm hết khả năng của mình. Sau một thời gian, kết quả đã chứng minh rằng quyết định của tôi là đúng. Tôi cảm thấy rất tự hào vì <span style='color:red;'><strong>[miêu tả cảm giác thành công hoặc bài học rút ra]</strong></span>.<br><br>" +
    "<strong>Giải thích:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Ở đây, bạn sẽ thay thế bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn tiết kiệm tiền làm gì đó', bạn sẽ điền là: 'Tiết kiệm tiền để mua một món đồ quan trọng'.</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Bạn điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó (ví dụ: khó khăn trong việc cắt giảm chi tiêu, cảm thấy thiếu động lực, v.v.).</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Bạn mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó.</li>" +
    "</ul>"
},
{
    question: "Tell about a time you saved money to do something? (Kể về một lần bạn tiết kiệm tiền làm gì đó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Saving money to buy a new laptop for my studies]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[challenged and a little frustrated because I had to cut back on my spending]</strong></span>, I decided to stick to my plan and save consistently over several months. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I successfully bought the laptop, which greatly helped improve my productivity and studies]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn tiết kiệm tiền làm gì đó', bạn sẽ điền vào: 'Tiết kiệm tiền để mua một chiếc laptop mới phục vụ cho việc học của mình.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy thử thách và hơi nản lòng vì tôi phải giảm chi tiêu nhiều.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã mua được chiếc laptop, và nó giúp tôi rất nhiều trong việc học và làm việc hiệu quả hơn.'</li>" +
    "</ul>"
},
{
    question: "A Time you Asked a Good Question. (Kể về lần bạn đặt một câu hỏi hay)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Asking a professor a question about a difficult concept during a class]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit nervous because I didn’t want to seem unprepared]</strong></span>, I decided to ask the question because I genuinely wanted to understand the material better. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[the professor explained the concept clearly, and it helped me improve my understanding of the subject]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn đặt một câu hỏi hay', bạn sẽ điền vào: 'Đặt câu hỏi với giảng viên về một khái niệm khó trong lớp học.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi lo lắng vì tôi không muốn bị cho là chưa chuẩn bị.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Giảng viên đã giải thích rất rõ ràng và điều này giúp tôi hiểu bài tốt hơn.'</li>" +
    "</ul>"
}
,
{
    question: "Tell me a time you read a good book. (Kể về một lần bạn đọc 1 cuốn sách hay)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Reading an inspiring book during a difficult time in my life]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit unsure if a book could help me feel better]</strong></span>, I decided to give it a try because I was looking for guidance and motivation. After a while, the result proved that my decision was the right one. I felt very uplifted because <span style='color:red;'><strong>[the book provided me with valuable lessons on resilience, and it helped me overcome my challenges]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn đọc 1 cuốn sách hay', bạn sẽ điền vào: 'Đọc một cuốn sách truyền cảm hứng trong một thời gian khó khăn trong cuộc sống của tôi.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy không chắc chắn liệu một cuốn sách có thể giúp tôi cảm thấy tốt hơn.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuốn sách đã mang lại cho tôi những bài học quý giá về sự kiên cường, và nó đã giúp tôi vượt qua những thử thách của mình.'</li>" +
    "</ul>"
},
{
    question: "Tell me a time you went to see a work of art. (Kể về một lần bạn đi xem một tác phẩm nghệ thuật)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Visiting an art gallery to see a famous painting]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a little unsure about the experience, as it was my first time visiting an art exhibition]</strong></span>, I decided to explore the gallery and appreciate the artwork. After a while, the result proved that my decision was the right one. I felt very inspired because <span style='color:red;'><strong>[the paintings were breathtaking, and they gave me a deeper appreciation for art and creativity]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn đi xem một tác phẩm nghệ thuật', bạn sẽ điền vào: 'Đi thăm một triển lãm nghệ thuật để xem một bức tranh nổi tiếng.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi bối rối vì đây là lần đầu tôi tham gia một triển lãm nghệ thuật.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Các bức tranh thật sự ấn tượng và giúp tôi có cái nhìn sâu sắc hơn về nghệ thuật và sự sáng tạo.'</li>" +
    "</ul>"
}

,
{
    question: "Describe a time when you had many options to choose from. (Kể về lần bạn có nhiều sự lựa chọn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Choosing a university to apply to, as I had several options in different cities]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[overwhelmed because there were so many good choices]</strong></span>, I decided to take my time, research each university, and weigh the pros and cons of each option. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I made an informed choice, and the university I chose turned out to be a great fit for my goals and aspirations]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn có nhiều sự lựa chọn', bạn sẽ điền vào: 'Chọn trường đại học để nộp hồ sơ vì tôi có nhiều sự lựa chọn ở các thành phố khác nhau.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy choáng ngợp vì có quá nhiều lựa chọn tốt.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã đưa ra quyết định đúng đắn, và trường đại học tôi chọn thực sự phù hợp với mục tiêu và ước mơ của tôi.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you worked in a team. (Kể về một lần bạn làm việc nhóm)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Working in a team to complete a group project at work]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit nervous because it was my first time working in a large team with diverse skills]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[we completed the project successfully, and I learned how to collaborate effectively with others]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn làm việc nhóm', bạn sẽ điền là: 'Làm việc nhóm để hoàn thành một dự án nhóm tại công ty.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi lo lắng vì đó là lần đầu tiên tôi làm việc trong một nhóm lớn với những kỹ năng đa dạng.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Bạn sẽ mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Chúng tôi đã hoàn thành dự án thành công, và tôi đã học được cách hợp tác hiệu quả với người khác.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you did an extreme sport. (Kể về một lần bạn chơi thể thao mạo hiểm)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Doing bungee jumping during a trip abroad]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[terrified and nervous about jumping from such a height]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I conquered my fear and had an unforgettable experience that boosted my confidence]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn chơi thể thao mạo hiểm', bạn sẽ điền vào: 'Chơi bungee jumping trong một chuyến đi du lịch nước ngoài.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy sợ hãi và lo lắng khi phải nhảy từ độ cao như vậy.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã vượt qua nỗi sợ hãi và có một trải nghiệm không thể quên, điều này giúp tôi tăng cường sự tự tin.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time you explored a forest. (Kể về một lần bạn vào rừng chơi)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Exploring a forest during a hiking trip with friends]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a little worried because I wasn’t sure what to expect in the forest]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[the adventure was amazing, and it allowed me to connect with nature and enjoy the peaceful environment]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn vào rừng chơi', bạn sẽ điền vào: 'Khám phá một khu rừng trong chuyến đi bộ đường dài cùng bạn bè.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Hồi hộp nhưng cũng có chút lo lắng vì không chắc mình sẽ gặp phải gì trong rừng.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Chuyến đi thật tuyệt vời và nó giúp tôi kết nối với thiên nhiên, cảm nhận sự yên bình.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you achieved something. (Kể về một lần bạn đạt được thành tựu)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Passing the MiniHippo test and obtaining my English proficiency certificate]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[nervous and unsure about whether I would perform well on the test]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I passed the test and earned the certificate, which boosted my confidence in using English in professional settings]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn đạt được thành tựu', bạn sẽ điền vào: 'Thi đạt chứng chỉ MiniHippo và nhận chứng chỉ tiếng Anh của mình.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng và không chắc liệu mình có thể hoàn thành bài thi tốt không.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã vượt qua bài thi và đạt chứng chỉ, điều này giúp tôi tự tin hơn khi sử dụng tiếng Anh trong công việc.' </li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you learned a new skill. (Kể về một lần bạn học một kỹ năng mới)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Learning how to use a new software program for work]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit overwhelmed because I had no prior experience with the software]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I became proficient in the software and it improved my efficiency at work]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn học một kỹ năng mới', bạn sẽ điền vào: 'Học cách sử dụng một phần mềm mới cho công việc.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi choáng ngợp vì không có kinh nghiệm trước đó với phần mềm này.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã thành thạo phần mềm này và cải thiện hiệu quả công việc của mình.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you received good news. (Kể về một lần bạn nhận được một tin tốt)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Receiving the news that I passed an important exam and achieved my goal]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[nervous and anxious while waiting for the result]</strong></span>, I decided to stay positive and keep my hopes up. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I had worked hard for the exam, and passing it boosted my confidence and opened new opportunities]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn nhận được một tin tốt', bạn sẽ điền vào: 'Nhận được tin mình đã đậu kỳ thi quan trọng và đạt được mục tiêu.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng và hồi hộp khi chờ đợi kết quả.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã làm việc chăm chỉ cho kỳ thi và việc đậu kỳ thi giúp tôi tự tin hơn và mở ra nhiều cơ hội mới.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you helped someone. (Kể về một lần bạn giúp đỡ một ai đó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Helping a friend move into a new apartment]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit tired because I had a busy week]</strong></span>, I decided to continue and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I was able to help my friend settle in and they were really grateful for the support]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn giúp đỡ một ai đó', bạn sẽ điền vào: 'Giúp một người bạn chuyển đến căn hộ mới.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi mệt mỏi vì tuần đó tôi đã có lịch trình bận rộn.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã giúp bạn ổn định cuộc sống mới và họ rất biết ơn sự hỗ trợ của tôi.'</li>" +
    "</ul>"
},
{
    question: "Describe a time when you went to an amusement park. (Kể về một lần bạn đi công viên giải trí)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Going to an amusement park with friends during a holiday]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a bit nervous because I wasn’t sure if the rides would be too scary]</strong></span>, I decided to continue and enjoy the experience. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I had a great time, tried new rides, and shared lots of fun moments with my friends]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn đi công viên giải trí', bạn sẽ điền vào: 'Đi công viên giải trí cùng bạn bè vào kỳ nghỉ.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy phấn khích nhưng cũng có chút lo lắng vì không chắc các trò chơi có quá đáng sợ hay không.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã có thời gian tuyệt vời, thử những trò chơi mới và chia sẻ nhiều khoảnh khắc vui vẻ với bạn bè.'</li>" +
    "</ul>"
},
{
    question: "Describe a time when you wanted to buy something but couldn’t. (Kể về một lần bạn muốn mua gì đó nhưng không được)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Wanting to buy a new laptop but couldn’t afford it at the time]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[disappointed and frustrated because I really needed the laptop for work]</strong></span>, I decided to continue and look for alternatives. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I saved money for a few months and was eventually able to buy the laptop when I could afford it]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn muốn mua gì đó nhưng không được', bạn sẽ điền vào: 'Muốn mua một chiếc laptop mới nhưng không đủ khả năng tài chính vào thời điểm đó.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy thất vọng và bực bội vì thực sự tôi cần chiếc laptop đó cho công việc.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã tiết kiệm tiền trong vài tháng và cuối cùng cũng có thể mua được chiếc laptop khi tôi đủ khả năng tài chính.'</li>" +
    "</ul>"
},
{
    question: "Describe a time when you hurried to do something. (Kể về một lần bạn vội vã làm gì đó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Hurrying to finish a work assignment before the deadline]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[stressed and rushed because I had left the task to the last minute]</strong></span>, I decided to focus and do my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I completed the assignment on time, and it was well received by my manager]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn vội vã làm gì đó', bạn sẽ điền vào: 'Vội vã hoàn thành công việc trước hạn chót.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy căng thẳng và vội vàng vì tôi đã để công việc đến phút cuối.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã hoàn thành công việc đúng hạn và nó được sếp đánh giá cao.'</li>" +
    "</ul>"
},
{
    question: "Describe a time when you laughed out loud with a friend. (Kể về một lần bạn cười lớn với người bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Laughing out loud with a friend while watching a funny movie]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit embarrassed because we were laughing so loudly in a public place]</strong></span>, I decided to continue and enjoy the moment. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[we had so much fun, and it brought us closer as friends]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn cười lớn với người bạn', bạn sẽ điền vào: 'Cười lớn với bạn khi xem một bộ phim hài.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi xấu hổ vì chúng tôi cười quá lớn ở nơi công cộng.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Chúng tôi đã có khoảng thời gian tuyệt vời, và điều này giúp gắn kết tình bạn của chúng tôi hơn.'</li>" +
    "</ul>"
},
{
    question: "Describe a time when you faced a difficult question. (Kể về một lần bạn gặp câu hỏi khó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Facing a difficult question during an important job interview]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[nervous and unsure about how to answer the question]</strong></span>, I decided to stay calm and think carefully. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I was able to answer the question thoughtfully, and it helped me land the job]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn gặp câu hỏi khó', bạn sẽ điền vào: 'Đối mặt với câu hỏi khó trong một buổi phỏng vấn xin việc quan trọng.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng và không chắc chắn về cách trả lời câu hỏi.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã trả lời câu hỏi một cách suy nghĩ kỹ lưỡng, và điều này giúp tôi có được công việc.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you had a holiday/vacation. (Kể về một lần bạn có 1 kỳ nghỉ lễ)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Going on a holiday to a beach resort with family]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a little stressed because I had a lot of work to catch up on]</strong></span>, I decided to enjoy the time away and relax. After a while, the result proved that my decision was the right one. I felt very refreshed because <span style='color:red;'><strong>[the holiday gave me time to recharge, enjoy beautiful scenery, and bond with my family]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn có 1 kỳ nghỉ lễ', bạn sẽ điền vào: 'Đi nghỉ tại khu nghỉ dưỡng bãi biển cùng gia đình.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy phấn khích nhưng cũng hơi căng thẳng vì tôi có rất nhiều công việc cần làm.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Kỳ nghỉ giúp tôi thư giãn, tận hưởng cảnh đẹp và gắn kết với gia đình.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you made a great effort. (Kể về một lần bạn nỗ lực)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Making a great effort to prepare for an important exam]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[exhausted and overwhelmed by the amount of material I had to cover]</strong></span>, I decided to continue and give it my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I passed the exam with a good grade, and my hard work paid off]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn nỗ lực', bạn sẽ điền vào: 'Nỗ lực học tập chuẩn bị cho một kỳ thi quan trọng.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy mệt mỏi và choáng ngợp vì khối lượng tài liệu phải ôn tập.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã vượt qua kỳ thi với điểm số tốt và cảm thấy tự hào vì sự nỗ lực của mình đã được đền đáp.'</li>" +
    "</ul>"
}
,
{
    question: "Describe a time when you worked with both elderly people and children. (Kể về một lần bạn làm việc với người già và trẻ)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Volunteering at a community event that involved both elderly people and children]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[challenged because I wasn’t sure how to engage both groups effectively]</strong></span>, I decided to stay patient and approach the situation with an open mind. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I was able to help both the elderly and children, creating a fun and supportive environment for everyone]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn làm việc với người già và trẻ', bạn sẽ điền vào: 'Tình nguyện tham gia sự kiện cộng đồng có sự tham gia của cả người già và trẻ em.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy thách thức vì tôi không biết làm sao để thu hút sự chú ý của cả hai nhóm.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã giúp đỡ cả người già và trẻ em, tạo ra một môi trường vui vẻ và hỗ trợ cho tất cả mọi người.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a challenge you have faced. (Kể về một thử thách của bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Facing a challenge in balancing work and study during university]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[overwhelmed by the pressure of deadlines and assignments]</strong></span>, I decided to stay focused and manage my time more effectively. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I successfully managed both work and study, and I was able to achieve my goals without sacrificing quality]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một thử thách bạn gặp phải', bạn sẽ điền vào: 'Đối mặt với thử thách trong việc cân bằng công việc và học tập trong thời gian đại học.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với thử thách đó, ví dụ: 'Cảm thấy choáng ngợp vì áp lực từ các hạn chót và bài tập.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã thành công trong việc cân bằng cả công việc và học tập, và đạt được mục tiêu mà không làm giảm chất lượng công việc.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a busy time you had. (Kể về một lần bạn bận rộn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Having a very busy period at work with multiple deadlines to meet]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[overwhelmed by the number of tasks I had to complete in a short time]</strong></span>, I decided to stay organized and manage my time effectively. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I successfully completed all the tasks on time and received positive feedback from my boss]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn bận rộn', bạn sẽ điền vào: 'Có một khoảng thời gian rất bận rộn tại công ty với nhiều công việc cần hoàn thành trước hạn chót.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy choáng ngợp vì số lượng công việc cần hoàn thành trong thời gian ngắn.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã hoàn thành tất cả công việc đúng hạn và nhận được phản hồi tích cực từ sếp.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you visited a new city. (Kể về một lần thăm một thành phố mới)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Visiting a new city for the first time during a holiday]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but a bit nervous because I didn’t know the city well]</strong></span>, I decided to explore the city and enjoy the experience. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[I got to experience the culture, try new food, and visit beautiful landmarks]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần thăm một thành phố mới', bạn sẽ điền vào: 'Thăm một thành phố mới lần đầu trong kỳ nghỉ.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi lo lắng vì tôi chưa quen với thành phố đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã trải nghiệm văn hóa mới, thử món ăn đặc trưng, và tham quan những địa điểm nổi bật.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you met a new friend. (Kể về một lần gặp một người bạn mới)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Meeting a new friend during a group activity at school]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit shy because I didn’t know anyone in the group]</strong></span>, I decided to approach the person and start a conversation. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[we quickly became good friends and had many common interests]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần gặp một người bạn mới', bạn sẽ điền vào: 'Gặp một người bạn mới trong một hoạt động nhóm ở trường.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi nhút nhát vì tôi không quen biết ai trong nhóm.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Chúng tôi nhanh chóng trở thành bạn tốt và có nhiều sở thích chung.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you received a gift. (Kể về một lần bạn được tặng quà)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Receiving a thoughtful gift from a close friend on my birthday]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[surprised and a little embarrassed because I wasn’t expecting anything]</strong></span>, I decided to appreciate the gesture and show my gratitude. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[the gift was something I truly needed and it made me feel loved and appreciated]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn được tặng quà', bạn sẽ điền vào: 'Nhận món quà ý nghĩa từ người bạn thân vào sinh nhật.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi nhận quà, ví dụ: 'Cảm thấy bất ngờ và hơi ngượng ngùng vì tôi không ngờ lại nhận được món quà.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Món quà thực sự là thứ tôi cần, và nó khiến tôi cảm thấy yêu thương và trân trọng.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you were helped. (Kể về một lần bạn được giúp đỡ)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Being helped by a colleague when I was overwhelmed with work]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit embarrassed to ask for help]</strong></span>, I decided to accept the offer and work together. After a while, the result proved that my decision was the right one. I felt very grateful because <span style='color:red;'><strong>[with their help, we were able to complete the task on time, and I learned valuable teamwork skills]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn được giúp đỡ', bạn sẽ điền vào: 'Được một đồng nghiệp giúp đỡ khi tôi quá tải công việc.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi xấu hổ khi phải nhờ vả sự giúp đỡ.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Nhờ sự giúp đỡ của họ, chúng tôi đã hoàn thành công việc đúng hạn và tôi học được kỹ năng làm việc nhóm quý giá.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time someone asked you to stop doing something. (Kể về một lần ai đó yêu cầu dừng làm việc gì)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Being asked by a colleague to stop talking during a meeting because it was disruptive]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[embarrassed and surprised because I didn’t realize I was disturbing others]</strong></span>, I decided to stop talking and pay attention to the discussion. After a while, the result proved that my decision was the right one. I felt very grateful because <span style='color:red;'><strong>[I was able to listen and learn more from the meeting, and it helped me improve my communication skills]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần ai đó yêu cầu dừng làm việc gì', bạn sẽ điền vào: 'Được yêu cầu ngừng nói chuyện trong cuộc họp vì đã làm phiền mọi người.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy xấu hổ và ngạc nhiên vì tôi không nhận ra mình đang làm phiền người khác.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã biết lắng nghe và học hỏi thêm trong cuộc họp, điều này giúp tôi cải thiện kỹ năng giao tiếp.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you got lost. (Kể về một lần bị lạc đường)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Getting lost while exploring a new city during a trip]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[frustrated and a little scared because I didn’t know the area well]</strong></span>, I decided to stay calm and ask for directions. After a while, the result proved that my decision was the right one. I felt very relieved because <span style='color:red;'><strong>[I eventually found my way and enjoyed the rest of my exploration with more confidence]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn bị lạc đường', bạn sẽ điền vào: 'Bị lạc khi khám phá một thành phố mới trong chuyến đi.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy bối rối và hơi lo lắng vì tôi không quen thuộc với khu vực này.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã tìm được đường và tận hưởng phần còn lại của chuyến đi với sự tự tin hơn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you visited an old building. (Kể về một lần thăm một tòa nhà cổ)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Visiting an old historical building during a trip to a new city]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[curious but also a little unsure about how much I would enjoy the visit]</strong></span>, I decided to explore the building and learn more about its history. After a while, the result proved that my decision was the right one. I felt very inspired because <span style='color:red;'><strong>[the building was full of rich history, and I learned so much about the past while appreciating the architecture]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn thăm một tòa nhà cổ', bạn sẽ điền vào: 'Thăm một tòa nhà lịch sử cổ khi đi du lịch ở một thành phố mới.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy tò mò nhưng cũng hơi không chắc liệu mình có thích chuyến tham quan này không.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tòa nhà đó chứa đựng nhiều lịch sử phong phú, và tôi đã học được rất nhiều về quá khứ trong khi trân trọng kiến trúc.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you broke a rule. (Kể về một lần phạm luật)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Breaking a rule by arriving late to an important meeting]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[guilty and worried about the consequences]</strong></span>, I decided to take responsibility for my actions and apologize. After a while, the result proved that my decision was the right one. I felt very relieved because <span style='color:red;'><strong>[I was forgiven, and I learned the importance of punctuality and being more mindful of my commitments]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn phạm luật', bạn sẽ điền vào: 'Phạm luật khi đến muộn một cuộc họp quan trọng.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy tội lỗi và lo lắng về hậu quả của việc đến muộn.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã được tha thứ, và tôi học được tầm quan trọng của việc đúng giờ và chú ý đến cam kết của mình.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you attended a music festival. (Kể về một lần tham gia lễ hội âm nhạc)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Attending a music festival with friends during the summer]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a bit overwhelmed because I wasn’t sure what to expect from such a big event]</strong></span>, I decided to go with an open mind and enjoy the experience. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[I had an unforgettable time listening to live music, dancing, and bonding with my friends]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần tham gia lễ hội âm nhạc', bạn sẽ điền vào: 'Tham gia lễ hội âm nhạc cùng bạn bè trong dịp hè.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi choáng ngợp vì tôi không biết lễ hội sẽ như thế nào.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã có một khoảng thời gian không thể quên khi nghe nhạc sống, nhảy múa và gắn kết với bạn bè.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you watched a sports match. (Kể về một lần xem một trận đấu thể thao)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Watching a live football match with friends at the stadium]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also nervous because it was my first time attending a live sports event]</strong></span>, I decided to enjoy the experience and support my team. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[the match was thrilling, and I had a great time cheering for my team and bonding with my friends]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần xem một trận đấu thể thao', bạn sẽ điền vào: 'Xem một trận đấu bóng đá trực tiếp với bạn bè tại sân vận động.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi lo lắng vì đây là lần đầu tiên tôi tham gia một sự kiện thể thao trực tiếp.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Trận đấu thật thú vị, tôi có thời gian tuyệt vời khi cổ vũ cho đội của mình và gắn kết với bạn bè.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you participated in an activity for children. (Kể về một lần tham gia hoạt động cho trẻ em)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Participating in a charity event to organize games and activities for children]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[a bit nervous because I didn’t have much experience with organizing events for kids]</strong></span>, I decided to take part and give it my best. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[the kids enjoyed the activities, and I helped create a fun and engaging environment for them]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần tham gia hoạt động cho trẻ em', bạn sẽ điền vào: 'Tham gia sự kiện từ thiện để tổ chức trò chơi và các hoạt động cho trẻ em.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hơi lo lắng vì tôi không có nhiều kinh nghiệm trong việc tổ chức sự kiện cho trẻ em.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Trẻ em đã rất vui vẻ với các hoạt động, và tôi đã giúp tạo ra một môi trường vui vẻ và hấp dẫn cho các em.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about your favorite outfit. (Kể về trang phục yêu thích của bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Wearing my favorite outfit to a special event like a family gathering]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but a bit nervous because I wanted to look good for the occasion]</strong></span>, I decided to go with my favorite outfit because it made me feel comfortable and confident. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[I received compliments and felt very comfortable throughout the event]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về trang phục yêu thích của bạn', bạn sẽ điền vào: 'Mặc trang phục yêu thích trong một sự kiện đặc biệt như buổi họp mặt gia đình.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy phấn khích nhưng cũng hơi lo lắng vì tôi muốn mình trông thật đẹp trong dịp đặc biệt này.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã nhận được nhiều lời khen và cảm thấy rất thoải mái suốt cả sự kiện.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about your sleeping habits. (Kể về thói quen ngủ của bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Talking about my sleeping habits, I usually sleep 7 to 8 hours a night]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[sometimes tired because of a busy schedule]</strong></span>, I decided to maintain a consistent sleep routine to improve my health. After a while, the result proved that my decision was the right one. I felt very refreshed because <span style='color:red;'><strong>[I had more energy during the day and felt more focused]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về thói quen ngủ của bạn', bạn sẽ điền vào: 'Thói quen ngủ của tôi thường là 7 đến 8 tiếng mỗi đêm.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Đôi khi cảm thấy mệt mỏi vì lịch trình bận rộn.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Khi duy trì thói quen ngủ đều đặn, tôi cảm thấy tràn đầy năng lượng và tập trung hơn trong suốt cả ngày.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you attended an English course. (Kể về một lần tham gia khóa học tiếng Anh)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Attending an English course to improve my language skills]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[nervous because I wasn’t confident in my speaking skills]</strong></span>, I decided to stay committed and focus on learning. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I gained more confidence in speaking and writing in English, and I was able to communicate better]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần tham gia khóa học tiếng Anh', bạn sẽ điền vào: 'Tham gia khóa học tiếng Anh để cải thiện kỹ năng ngôn ngữ của tôi.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng vì tôi không tự tin vào kỹ năng nói của mình.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã tự tin hơn khi nói và viết tiếng Anh, và tôi có thể giao tiếp tốt hơn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you helped someone. (Kể về một lần bạn giúp đỡ ai đó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Helping a friend move to a new apartment]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[tired because I had a busy schedule]</strong></span>, I decided to help because I knew how important it was for my friend. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[my friend appreciated my help, and we both had a great time during the move]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn giúp đỡ ai đó', bạn sẽ điền vào: 'Giúp một người bạn chuyển đến căn hộ mới.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy mệt mỏi vì tôi đã có lịch trình bận rộn trong ngày hôm đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Bạn tôi rất cảm kích vì sự giúp đỡ của tôi, và chúng tôi đã có thời gian vui vẻ trong suốt quá trình chuyển nhà.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you were in a hurry. (Kể về một lần bạn vội vàng)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Being in a hurry to catch a flight after running late]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[stressed and worried because I was running out of time]</strong></span>, I decided to stay calm and focus on getting to the airport as quickly as possible. After a while, the result proved that my decision was the right one. I felt very relieved because <span style='color:red;'><strong>[I managed to catch my flight just in time and learned to plan better for future travels]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn vội vàng', bạn sẽ điền vào: 'Vội vàng để bắt chuyến bay sau khi bị trễ.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy căng thẳng và lo lắng vì tôi không còn nhiều thời gian.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã kịp chuyến bay và học được bài học về việc lập kế hoạch thời gian cẩn thận hơn cho những chuyến đi tiếp theo.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you had many choices. (Kể về một lần có nhiều sự lựa chọn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Choosing a university major from multiple options]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[confused and uncertain about which path to choose]</strong></span>, I decided to take my time to research each option and reflect on what I truly enjoyed. After a while, the result proved that my decision was the right one. I felt very confident because <span style='color:red;'><strong>[I chose a major that aligned with my interests, and I was excited to start my studies]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn có nhiều sự lựa chọn', bạn sẽ điền vào: 'Chọn ngành học từ nhiều lựa chọn khác nhau.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy bối rối và không chắc chắn về con đường nào là tốt nhất cho mình.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã chọn một ngành học phù hợp với sở thích và tôi rất hào hứng bắt đầu việc học.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you received a difficult question. (Kể về một lần nhận câu hỏi khó)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Receiving a difficult question during a job interview]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[nervous and unsure about how to answer]</strong></span>, I decided to take a moment, stay calm, and answer the question thoughtfully. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I gave a clear, well-thought-out answer and impressed the interviewers]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần nhận câu hỏi khó', bạn sẽ điền vào: 'Nhận câu hỏi khó trong một buổi phỏng vấn xin việc.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng và không chắc chắn về cách trả lời câu hỏi.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã trả lời câu hỏi một cách rõ ràng và chu đáo, và gây ấn tượng với người phỏng vấn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you had to put in a lot of effort. (Kể về một lần phải dành ra nhiều nỗ lực)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Studying for an important exam that required a lot of preparation]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[overwhelmed by the amount of material I had to cover]</strong></span>, I decided to stay disciplined, create a study schedule, and give my best effort. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I passed the exam with great results and learned the value of hard work and persistence]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần phải dành ra nhiều nỗ lực', bạn sẽ điền vào: 'Học cho một kỳ thi quan trọng đòi hỏi rất nhiều sự chuẩn bị.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy choáng ngợp vì khối lượng tài liệu tôi cần phải ôn tập.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã vượt qua kỳ thi với kết quả xuất sắc và học được giá trị của sự chăm chỉ và kiên trì.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you spent a lot of time planning something. (Kể về một lần mất nhiều thời gian để lên kế hoạch cho một việc)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Planning a big event, such as organizing a birthday party for a friend]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[overwhelmed by the details and the number of tasks to be done]</strong></span>, I decided to stay organized and divide the tasks into smaller steps. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[the event was a huge success, and everyone had a great time]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn mất nhiều thời gian để lên kế hoạch cho một việc', bạn sẽ điền vào: 'Lên kế hoạch cho một sự kiện lớn, chẳng hạn như tổ chức bữa tiệc sinh nhật cho một người bạn.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy choáng ngợp với rất nhiều chi tiết và công việc cần phải làm.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Sự kiện đã thành công rực rỡ và mọi người đều có khoảng thời gian tuyệt vời.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you wanted to buy something but couldn't. (Kể về một lần muốn mua gì đó nhưng không được)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Wanting to buy a new laptop but not being able to afford it at the time]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[disappointed and frustrated because I really needed it]</strong></span>, I decided to save money and plan my budget better. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I managed to save up enough money and finally bought the laptop, which helped me a lot in my work and studies]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần bạn muốn mua gì đó nhưng không được', bạn sẽ điền vào: 'Muốn mua một chiếc laptop mới nhưng không đủ tiền lúc đó.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy thất vọng và chán nản vì tôi thực sự cần chiếc laptop đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã tiết kiệm đủ tiền và mua được chiếc laptop, điều này đã giúp tôi rất nhiều trong công việc và học tập.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you had a long trip. (Kể về một lần có một chuyến đi dài)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Going on a long trip to a distant city for a vacation]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a bit tired because the journey was long and tiring]</strong></span>, I decided to enjoy the experience and focus on the destination. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[I had a wonderful time exploring the city, experiencing new cultures, and relaxing]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần có một chuyến đi dài', bạn sẽ điền vào: 'Đi chuyến du lịch dài đến một thành phố xa.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi mệt mỏi vì chuyến đi dài và vất vả.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã có một thời gian tuyệt vời khi khám phá thành phố, trải nghiệm nền văn hóa mới và thư giãn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you visited a tall building. (Kể về một lần đi thăm tòa nhà cao tầng)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Visiting a famous skyscraper during a trip to a major city]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a bit nervous because of the height]</strong></span>, I decided to go up to the observation deck and enjoy the view. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[the view from the top was breathtaking, and I got to experience the city from a new perspective]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần đi thăm tòa nhà cao tầng', bạn sẽ điền vào: 'Thăm một tòa nhà chọc trời nổi tiếng trong chuyến đi đến thành phố lớn.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi lo lắng vì độ cao của tòa nhà.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã có một trải nghiệm tuyệt vời khi chiêm ngưỡng toàn cảnh thành phố từ đỉnh tòa nhà.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you encountered bad weather. (Kể về một lần gặp thời tiết xấu)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Encountering a heavy rainstorm during a hiking trip in the mountains]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[worried and uncomfortable because of the sudden downpour]</strong></span>, I decided to stay calm and take shelter until the rain eased. After a while, the result proved that my decision was the right one. I felt very relieved because <span style='color:red;'><strong>[I was able to continue the hike safely, and the experience taught me to always be prepared for unpredictable weather]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần gặp thời tiết xấu', bạn sẽ điền vào: 'Gặp một cơn mưa to trong chuyến đi bộ đường dài trên núi.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy lo lắng và khó chịu vì mưa to đột ngột.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã tiếp tục chuyến đi một cách an toàn, và tôi học được bài học về việc luôn chuẩn bị sẵn sàng cho thời tiết bất ngờ.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you received good news. (Kể về một lần nhận tin tốt)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Receiving the good news of getting accepted into my dream university]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[shocked and overjoyed because I had been waiting for the result for so long]</strong></span>, I decided to take a moment to process the news and share it with my family. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I achieved something I had worked so hard for, and it opened up many exciting opportunities for me]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần nhận tin tốt', bạn sẽ điền vào: 'Nhận tin vui về việc được nhận vào trường đại học mà mình mơ ước.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy sốc và vui sướng vì tôi đã chờ đợi kết quả này rất lâu.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã đạt được điều mà tôi đã làm việc rất chăm chỉ, và điều này mở ra nhiều cơ hội thú vị cho tôi.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you did something you didn't want to do. (Kể về một lần làm việc mình không muốn làm)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Being asked to help a colleague with a task I didn’t enjoy at work]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[reluctant and not excited about doing the task]</strong></span>, I decided to help because I knew it was important to support my colleague. After a while, the result proved that my decision was the right one. I felt very satisfied because <span style='color:red;'><strong>[I was able to assist my team, and it helped build better relationships with my coworkers]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần làm việc mình không muốn làm', bạn sẽ điền vào: 'Được yêu cầu giúp một đồng nghiệp với công việc mà tôi không thích.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy miễn cưỡng và không hứng thú khi phải làm công việc đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã giúp đỡ đồng nghiệp và điều này giúp tôi xây dựng mối quan hệ tốt hơn với các đồng đội.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time someone was rude to you. (Kể về một lần ai đó thiếu lịch sự với bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Being treated rudely by a stranger at a store]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[angry and upset about the behavior]</strong></span>, I decided to stay calm and not react aggressively. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I maintained my composure, handled the situation gracefully, and avoided escalating the conflict]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần ai đó thiếu lịch sự với bạn', bạn sẽ điền vào: 'Bị đối xử thô lỗ bởi một người lạ trong cửa hàng.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy tức giận và khó chịu vì hành vi thiếu lịch sự đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Tôi đã giữ bình tĩnh, xử lý tình huống một cách điềm tĩnh và tránh làm tình hình trở nên căng thẳng hơn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a place you have traveled to. (Kể về nơi bạn đã từng đi du lịch)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Traveling to a beautiful coastal city for a vacation]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a little anxious because it was my first time visiting the place]</strong></span>, I decided to embrace the experience and explore the city. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[the city was amazing, with stunning beaches, delicious food, and friendly locals, making it a memorable trip]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về nơi bạn đã từng đi du lịch', bạn sẽ điền vào: 'Đi du lịch đến một thành phố ven biển xinh đẹp.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi lo lắng vì đây là lần đầu tiên tôi đến thăm nơi này.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Thành phố rất tuyệt vời với những bãi biển đẹp, món ăn ngon và người dân thân thiện, tạo nên một chuyến đi khó quên.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you wanted something but couldn't get it. (Kể về một lần muốn thứ gì đó nhưng không có được)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Wanting to buy a new phone but not being able to afford it at the time]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[disappointed and frustrated because I really needed the phone]</strong></span>, I decided to wait and save money for it. After a while, the result proved that my decision was the right one. I felt very proud because <span style='color:red;'><strong>[I was able to buy the phone after saving for a few months, and it felt great to achieve my goal]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần muốn thứ gì đó nhưng không có được', bạn sẽ điền vào: 'Muốn mua một chiếc điện thoại mới nhưng không đủ tiền lúc đó.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy thất vọng và khó chịu vì tôi thực sự cần chiếc điện thoại đó.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Cuối cùng tôi đã tiết kiệm đủ tiền và mua được chiếc điện thoại, điều này đã giúp tôi học được sự kiên nhẫn và lập kế hoạch tài chính tốt hơn.'</li>" +
    "</ul>"
}
,
{
    question: "Talk about a time you visited a friend. (Kể về một lần tới thăm bạn)",
    answer1: "There was a time when I faced a special situation, where I had to make an important decision or take significant action. <span style='color:red;'><strong>[Visiting a close friend who had just moved to a new city]</strong></span>. Although at first, I felt <span style='color:red;'><strong>[excited but also a little nervous since it was my first time visiting their new place]</strong></span>, I decided to go and catch up with them. After a while, the result proved that my decision was the right one. I felt very happy because <span style='color:red;'><strong>[we had a great time together, reconnecting and sharing memories, and I got to see their new life in the city]</strong></span>.<br><br>" +
    "<strong>Giải thích chi tiết:</strong><br>" +
    "<ul>" +
    "<li><strong>[Tình huống cụ thể từ câu hỏi]</strong>: Thay phần này bằng tình huống cụ thể liên quan đến câu hỏi, ví dụ: nếu câu hỏi là 'Kể về một lần tới thăm bạn', bạn sẽ điền vào: 'Thăm một người bạn thân vừa chuyển đến thành phố mới.'</li>" +
    "<li><strong>[Miêu tả cảm xúc hoặc khó khăn]</strong>: Phần này bạn sẽ điền vào cảm xúc hoặc khó khăn khi đối mặt với tình huống đó, ví dụ: 'Cảm thấy hào hứng nhưng cũng hơi lo lắng vì đây là lần đầu tiên tôi đến thăm nơi ở mới của họ.'</li>" +
    "<li><strong>[Miêu tả cảm giác thành công hoặc bài học rút ra]</strong>: Mô tả cảm giác tự hào về kết quả đạt được hoặc bài học bạn học được từ trải nghiệm đó, ví dụ: 'Chúng tôi đã có một khoảng thời gian tuyệt vời cùng nhau, kết nối lại và chia sẻ những kỷ niệm, và tôi được chứng kiến cuộc sống mới của họ tại thành phố này.'</li>" +
    "</ul>"
}

    

];

// Function to populate the table with questions
function populateQuestions() {
  const tableBody = document.getElementById('questionTableBody');

  questions.forEach((q, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${q.question}</td>
      <td><button class="btn btn-info" onclick="showAnswer(1, ${index})">Xem đáp án</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to show the modal with the appropriate answer
function showAnswer(answerNumber, questionIndex) {
  const question = questions[questionIndex];
  
  if (answerNumber === 1) {
    // Populate and show Answer 1 modal
    document.getElementById('answer1ModalLabel').innerText = `Đáp án: ${question.question}`;
    document.getElementById('answer1Text').innerHTML = question.answer1;
    new bootstrap.Modal(document.getElementById('answer1Modal')).show();
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Your existing code here
  populateQuestions(); // Call the function once the DOM is loaded
});

// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo mã JavaScript chỉ chạy sau khi DOM tải xong
    let timeLeft = 12 * 60; // 35 minutes in seconds
    const countdownElement = document.getElementById('countdownTimer');

    function updateCountdown() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
});


// ===============================================================================================================
// ////////////// HIỂN THỊ THÔNG BÁO KHI NHẤN NÚT NEXT/BACK ///////////////
// ===============================================================================================================
// Chờ DOM được tải đầy đủ
document.addEventListener('DOMContentLoaded', () => {
  // Lấy các phần tử nút "Back" và "Next"
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');
  
  // Kiểm tra nếu nút tồn tại
  if (backButton && nextButton) {
    // Hàm hiển thị modal
    function showModal() {
      const modal = new bootstrap.Modal(document.getElementById('remindModal'));
      modal.show();
    }

    // Lắng nghe sự kiện nhấn nút "Back" và "Next"
    backButton.addEventListener('click', () => {
      showModal();  // Hiển thị modal khi nhấn "Back"
    });

    nextButton.addEventListener('click', () => {
      showModal();  // Hiển thị modal khi nhấn "Next"
    });
  }
});
