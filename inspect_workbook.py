import os, zipfile, xml.etree.ElementTree as ET
path = r'C:\Users\angus\Desktop\Limpopo Chefs Acadamy\limpopo-chefs-menus\Menu B7 Assessment sheet Example.xlsm'
print('exists', os.path.exists(path))
if os.path.exists(path):
    with zipfile.ZipFile(path) as z:
        names = z.namelist()
        print('files', [n for n in names if n.startswith('xl/')][:20])
        wb = ET.fromstring(z.read('xl/workbook.xml'))
        ns = {'a':'http://schemas.openxmlformats.org/spreadsheetml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
        sheets = wb.find('a:sheets', ns)
        for s in sheets:
            print('sheet', s.attrib.get('name'), s.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'))
        print('shared strings?', 'xl/sharedStrings.xml' in names)
