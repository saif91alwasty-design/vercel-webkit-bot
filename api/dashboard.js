export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.send(`<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebKit Bot</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Segoe UI',Tahoma,sans-serif;background:#000;color:#fff;padding:15px}
        .container{max-width:500px;margin:0 auto}
        .header{text-align:center;padding:25px;background:#111;border-radius:12px;margin-bottom:15px;border:1px solid #333}
        .header h1{font-size:1.5em;color:#4fc3f7}
        .card{background:#111;border-radius:10px;padding:18px;margin-bottom:12px;border:1px solid #333}
        .card h3{color:#4fc3f7;margin-bottom:10px}
        input{width:100%;padding:12px;border-radius:6px;border:1px solid #333;background:#000;color:#fff;font-size:16px;margin:5px 0}
        button{background:#4fc3f7;color:#000;border:none;padding:12px;border-radius:6px;font-size:16px;font-weight:bold;width:100%;cursor:pointer}
        button:disabled{opacity:0.5}
        pre{background:#000;padding:10px;border-radius:6px;font-size:11px;overflow-x:auto;border:1px solid #333;margin-top:8px}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 WebKit Bot</h1>
            <p style="opacity:0.7;font-size:0.9em;">iOS Safari · Vercel</p>
        </div>
        <div class="card">
            <h3>🎯 اختبار</h3>
            <input id="url" value="https://freexapk.download/" placeholder="الرابط">
            <button onclick="test()">🚀 تشغيل</button>
        </div>
        <div id="res"></div>
    </div>
    <script>
        async function test(){
            const b=document.querySelector('button');
            const r=document.getElementById('res');
            b.disabled=true;b.textContent='⏳...';
            r.innerHTML='<div class="card"><p>🔄 جاري التحميل...</p></div>';
            try{
                const x=await fetch('/api/visit-webkit?url='+encodeURIComponent(document.getElementById('url').value));
                const d=await x.json();
                r.innerHTML='<div class="card"><h3>'+(d.success?'✅':'❌')+'</h3><pre>'+JSON.stringify(d,null,2)+'</pre></div>';
            }catch(e){
                r.innerHTML='<div class="card"><h3>❌</h3><p>'+e.message+'</p></div>';
            }
            b.disabled=false;b.textContent='🚀 تشغيل';
        }
    </script>
</body>
</html>`);
}
