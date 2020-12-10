import Button from './export_button'
import jsPDF from "jspdf";
import 'jspdf-autotable'
import $ from "jquery";
import Canvg from 'canvg';

function IdrExport(props) {
    var landscape = props.landscape;
    var div_id = props.div_id;
    var pageW = 200;
    var pageMiddle = 105;
    if(landscape ==='landscape') {
        pageW = 287;
        pageMiddle = 148;
    }
    var pdf = pdf_new_doc(landscape);    
    var doc = pdf['doc'] 
    var pageHeight= pdf['pageHeight'];
    var position_top = pdf['position_final'];
    var copyright = 'Copyright © '+(new Date()).getFullYear()+' Idrive Inc.';    
    var ImageToLoad = new Image();  
    let v = null;
    var promise_img = [];    

    function click_export(payload) {
        pdf_copyright(doc, pageMiddle, doc.internal.getNumberOfPages());
        send_to_printable();
        Promise.all(promise_img).then(function(result){
			export_doc(payload).then(function(result){
                pdf_pager(doc, doc.internal.getNumberOfPages()).then(function(a){
                    doc.save(payload+".pdf");      
                });
                
            });
		});
    }

    function send_to_printable(){
        if($('#printing_area').length > 0){
            $('#printing_area').find('svg').each(function(i){
                var svg = $(this);
                promise_img.push(jsPDFsvg(svg))
            });
        }           
    }    

    function export_doc(payload) {
        return new Promise(function(resolve, reject){
            if($('#'+ div_id).length > 0){
                $('#'+ div_id + ' *').each(function(i){
                    if (position_top>=pageHeight-10){
                        pdf_new_page(doc);
                        position_top = 10;
                    }  
                    switch($(this).get(0).tagName) {
                        case "H1":
                            doc.setFontSize(16);
                            doc.setTextColor(0,0,0);
                            doc.text(10, position_top, $(this).text(), null, null, 'left'); 
                            position_top = position_top + 10;
                            break;
                        case "H2":
                        case "H3":
                        case "H4":
                            doc.setFontSize(14);
                            doc.setTextColor(0,0,0);
                            doc.text(10, position_top, $(this).text(), null, null, 'left'); 
                            position_top = position_top + 10;
                            break;
                        case "P":
                        case "SPAN":
                                doc.setFontSize(12);
                                doc.setTextColor(0,0,0);
                                doc.text(10, position_top, $(this).text(), null, null, 'left'); 
                                position_top = position_top + 10;
                                break;
                        case "IMG":    
                            var src = $(this).attr('src')                    
                            jsPDFimages(src, $(this))
                            break;
                    }
                }); 
                $(".from_svg").remove();
                resolve(true);                            
            }   
        });       
    }

    async function jsPDFsvg(svg){ 
        var svg_text = svg[0].innerHTML;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var svgh = svg.height();
        var svgw = svg.width();
        canvas.width = svgw;
        canvas.height = svgh;

        v = await Canvg.from(ctx, svg_text);
        v.start();
        //svg.after(canvas) 
        var src = canvas.toDataURL('image/jpg');
        jsPDFimages(src, svg)
    }

    function getImageFromUrl(url, elem, callback) {                       
        ImageToLoad.crossOrigin = "Anonymous";                
        ImageToLoad.onload = function () {                    
            callback(ImageToLoad);
        };
        ImageToLoad.src = url;
        ImageToLoad.width = 50;
        ImageToLoad.height = 50;
        createPDF(ImageToLoad, elem)
    }
    
    function createPDF(imgData, elem) {  
        if(typeof elem != "undefined"){            
            if(elem.get(0).tagName == "svg"){
                elem.after('<img class="from_svg" style="display:none" src="'+imgData.src+'"/>')
            } else {
                var width = imgData.width;        
                var height = imgData.height;  
                position_top = position_top + height + 10;
                var y = position_top - height - 10;

                doc.addImage({
                    imageData: imgData,
                    x: 10,
                    y: y,
                    w: width,
                    h: height,                    
                });
            }             
        }     
    }

    function jsPDFimages(src, elem) {  
        getImageFromUrl(src, elem, createPDF);                
    }

    function pdf_new_doc(landscape) {        
        var position_final = 0;
        var doc = new jsPDF('p', 'mm', 'A4');        
        if(landscape ==='landscape') {
            doc = new jsPDF('l', 'mm', 'A4');
        }
        var bottom_page = 40;
        var pageHeight= (doc.internal.pageSize.height - bottom_page);
        var position_top = 0;
        doc.setFont("helvetica"); 

        if(typeof props.printed_at !== 'undefined' && props.printed_at !=='' ) {
            position_top = position_top + 5;
            doc.setFontSize(9);
            doc.text(pageW, position_top, props.printed_at, null, null, 'right');        
        }

        if(typeof props.company !== 'undefined' && props.company !=='' ) {
            var ch = pdf_table(doc, '', props.company, 26, 'bold', 'center','middle', 10, position_top, (pageW-10), [0,0,0]);
            doc = ch['doc'];
            position_top = ch['position_final'];
        }       
        

        position_final = position_top + 5;
        return {doc: doc, position_final: position_final, pageHeight: pageHeight};
    }

    function pdf_new_page(doc, landscape) {
        pageW = 200;
        pageMiddle = 105;
        if(landscape ==='landscape') {
            pageW = 287;
            pageMiddle = 148;
        }
        doc.addPage(); 
        pdf_copyright(doc, pageMiddle, doc.internal.getNumberOfPages()); 
    }

    function pdf_copyright(doc, pageMiddle, page){
        if(typeof copyright != 'undefined') {            
            doc.setTextColor(93,93,93);
            doc.setFontSize(11);  
            doc.setPage(page);            
            doc.text(pageMiddle,doc.internal.pageSize.height-7, copyright, null, null, 'center');
        }
    }

    function pdf_pager(doc, pages){ 
        return new Promise(function(resolve, reject){
            doc.setTextColor(93,93,93);
            doc.setFontSize(11);
            for(var i=1; i<=pages; i++){
                doc.setPage(i)
                var page = i + '/' + pages;
                doc.text(10,doc.internal.pageSize.height-7, page, null, null, 'center');
                if(i == pages){
                    resolve(true);
                }
            }  
        });
    }

    function pdf_table(doc, head="", body="", fontSize=11, fontStyle="normal", halign, valign, position_left, position_top, w, color=[0,0,0]) {
        var position_final = 0;
        var table_head = head;
        var table_body = body;
        if(typeof body == 'string'){
            var table_body = [body];
        }
        doc.autoTable(
            [table_head], 
            [table_body], 
            {
                theme: 'plain', // 'striped', 'grid' or 'plain'
                styles: {
                    fontSize: fontSize,
                    fontStyle: fontStyle,
                    cellWidth: 'auto',
                    overflow: 'linebreak',
                    cellPadding: 0,
                    lineWidth: 0,
                    halign: halign,
                    valign: valign,
                    textColor: color
                },
                columnStyles: {
                    fontStyle: 'bold',
                },
                margin: {
                    left:position_left
                },
                startY: (position_top),
                tableWidth: w,
                showHeader: false
            }
        );
        position_final = parseInt(doc.lastAutoTable.finalY);
        return {doc: doc, position_final: position_final};
    }

    return (
        <div className="idrExport">
            <Button name_pdf={props.name_pdf} button_name={props.button_name} onClick={click_export}></Button>
        </div>
    );
}

export default IdrExport;