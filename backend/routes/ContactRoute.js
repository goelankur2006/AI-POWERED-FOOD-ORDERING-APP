import express from 'express';
import multer from 'multer';
import XLSX from 'xlsx';
import fs from 'fs';

const contactRoute = express.Router();
const upload = multer({ dest: 'uploads/' });

contactRoute.post('/', upload.array('files'), async (req, res) => {
  const { name, email, phone, city, state, message } = req.body;
  const files = req.files ? req.files.map(f => f.originalname).join(', ') : '';

  // Prepare data row
  const row = [name, email, phone, city, state, message, files];

  // Excel file path
  const filePath = 'uploads/contact_responses.xlsx';
  
  let workbook, worksheet;
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
    XLSX.utils.sheet_add_aoa(worksheet, [row], { origin: -1 });
  } else {
    worksheet = XLSX.utils.aoa_to_sheet([['Name', 'Email', 'Phone', 'City', 'State', 'Message', 'Files'], row]);
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Responses');
  }
  XLSX.writeFile(workbook, filePath);

  res.json({ success: true });
});

export default contactRoute;