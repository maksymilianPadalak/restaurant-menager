import { InvoiceService } from '../services/invoiceService.js';

export const getInvoiceByOrderId = (req, res) => {
    const { params, body } = req;
    const currency = body.currency;
    const { id } = params || {};
    if (!params?.id) return res.json({data: []});
    
    try {
      const getInvoice = InvoiceService.getByOrderId(params.id, body.currency);
      getInvoice.then(invoice => {return res.status(201).json(invoice)});
    }
    catch (err) {
        return res.send(500);
    }
};
