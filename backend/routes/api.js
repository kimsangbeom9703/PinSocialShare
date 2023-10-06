const express = require('express');
const router = express.Router();


// 데이터 예시 (이 부분을 실제 데이터로 대체)
const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
];

// /api/data 엔드포인트에 대한 GET 요청 처리
router.get('/data', (req, res) => {
    res.json(data); // 데이터를 JSON 형식으로 응답
});
module.exports = router;
