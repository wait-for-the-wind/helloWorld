export default {
  data() {
    return {}
  },
  mounted() {
    // this.test()
  },
  methods: {
    test() {
      console.log('123', 123123123123)
    },
    toDateTime(date) {
      const nowDate = date
      const y = nowDate.getFullYear()
      let m = nowDate.getMonth() + 1
      m = m < 10 ? `0${m}` : m
      let d = nowDate.getDate()
      d = d < 10 ? `0${d}` : d
      let h = nowDate.getHours()
      h = h < 10 ? `0${h}` : h
      let min = nowDate.getMinutes()
      min = min < 10 ? `0${min}` : min
      let s = nowDate.getSeconds()
      s = s < 10 ? `0${s}` : s
      return `${y}-${m}-${d} ${h}:${min}:${s}`
    },
    toDate(date) {
      const nowDate = date
      const y = nowDate.getFullYear()
      let m = nowDate.getMonth() + 1
      m = m < 10 ? `0${m}` : m
      let d = nowDate.getDate()
      d = d < 10 ? `0${d}` : d
      return `${y}-${m}-${d}`
    },
    // excel格式
    tableToExcel(excel, fileName) {
      let excelFile =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>"
      excelFile +=
        '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
      excelFile +=
        '<meta http-equiv="content-type" content="application/vnd.ms-excel'
      excelFile += '; charset=UTF-8">'
      excelFile += '<head>'
      excelFile += '<!--[if gte mso 9]>'
      excelFile += '<xml>'
      excelFile += '<x:ExcelWorkbook>'
      excelFile += '<x:ExcelWorksheets>'
      excelFile += '<x:ExcelWorksheet>'
      excelFile += '<x:Name>'
      excelFile += '{worksheet}'
      excelFile += '</x:Name>'
      excelFile += '<x:WorksheetOptions>'
      excelFile += '<x:DisplayGridlines/>'
      excelFile += '</x:WorksheetOptions>'
      excelFile += '</x:ExcelWorksheet>'
      excelFile += '</x:ExcelWorksheets>'
      excelFile += '</x:ExcelWorkbook>'
      excelFile += '</xml>'
      excelFile += '<![endif]-->'
      excelFile += '</head>'
      excelFile += '<body>'
      excelFile += excel
      excelFile += '</body>'
      excelFile += '</html>'
      let uri =
        'data:application/vnd.ms-excel;charset=utf-8,' +
        encodeURIComponent(excelFile)
      let link = document.createElement('a')
      link.href = uri
      link.style = 'visibility:hidden'
      link.download = fileName + '.xls'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
