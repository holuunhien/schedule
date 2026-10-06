// Dữ liệu Thời khóa biểu 11A2 chính xác từ ảnh
const scheduleData = {
    "Thứ 2": {
        sang: ["ChCờ - Thoại", "Hoá - Thạnh [C7]", "Sinh - Thoại [C7]", "Sinh - Thoại [C7]", "Anh - Xuân Diệu [C7]"],
        chieu: ["", "", "", "", ""]
    },
    "Thứ 3": {
        sang: ["Lý - Thái [C7]", "Lý - Thái [C7]", "Sử - Bá [C7]", "Toán - Hòa [C7]", "Toán - Hòa [C7]"],
        chieu: ["", "", "", "", ""]
    },
    "Thứ 4": {
        sang: ["Toán - Hòa [C7]", "Toán - Hòa [C7]", "Tin - Hiệp [C7]", "Tin - Hiệp [C7]", "Sử - Bá [C7]"],
        chieu: ["", "", "", "", ""]
    },
    "Thứ 5": {
        sang: ["Văn - Học [C7]", "Văn - Học [C7]", "Anh - Xuân Diệu [C7]", "Anh - Xuân Diệu [C7]", "Lý - Thái [C7]"],
        chieu: ["", "AN&QP - Kim Thùy", "GDĐP - Thoại [C14]", "T. Dục - Lợi", "T. Dục - Lợi"]
    },
    "Thứ 6": {
        sang: ["Hoá - Thạnh [C7]", "Hoá - Thạnh [C7]", "Văn - Học [C7]", "TN&HN - Thoại [C7]", "TN&HN - Thoại [C7]"],
        chieu: ["", "", "", "", ""]
    }
};

const scheduleBody = document.getElementById('scheduleBody');
const daySelect = document.getElementById('daySelect');

// Hàm render bảng thời khóa biểu
function renderSchedule(filterDay = "all") {
    scheduleBody.innerHTML = "";

    for (const [day, data] of Object.entries(scheduleData)) {
        if (filterDay !== "all" && filterDay !== day) continue;

        for (let i = 0; i < 5; i++) {
            const tr = document.createElement('tr');

            // Hàng đầu tiên của ngày mới sẽ gộp 5 tiết (rowspan=5)
            if (i === 0) {
                tr.classList.add('day-border-top');
                const tdDay = document.createElement('td');
                tdDay.rowSpan = 5;
                tdDay.className = 'day-cell';
                tdDay.textContent = day.replace("Thứ ", "");
                tr.appendChild(tdDay);
            }

            // Tiết
            const tdTiet = document.createElement('td');
            tdTiet.className = 'tiet-cell';
            tdTiet.textContent = i + 1;
            tr.appendChild(tdTiet);

            // Buổi Sáng
            const tdSang = document.createElement('td');
            tdSang.className = data.sang[i] ? 'subject' : 'empty-slot';
            tdSang.textContent = data.sang[i] || '---';
            tr.appendChild(tdSang);

            // Buổi Chiều
            const tdChieu = document.createElement('td');
            tdChieu.className = data.chieu[i] ? 'subject' : 'empty-slot';
            tdChieu.textContent = data.chieu[i] || '---';
            tr.appendChild(tdChieu);

            scheduleBody.appendChild(tr);
        }
    }
}

// Bắt sự kiện lọc ngày
daySelect.addEventListener('change', (e) => {
    renderSchedule(e.target.value);
});

// Chạy lần đầu khi load trang
renderSchedule();