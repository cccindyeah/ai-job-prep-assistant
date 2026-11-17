const analyzeBtn = document.getElementById("analyzeBtn");
const analysisResult = document.getElementById("analysisResult");
const mockBtn = document.getElementById("mockBtn");
const mockStatus = document.getElementById("mockStatus");

analyzeBtn.addEventListener("click", () => {
  analysisResult.innerHTML = `
    <div class="result-group">
      <h3>示範分析結果</h3>
      <p class="note">目前為固定示範內容，尚未串接 AI API。</p>
    </div>

    <div class="result-group">
      <h4>關鍵能力</h4>
      <ul>
        <li>資料分析與問題解決</li>
        <li>跨部門溝通與協作</li>
        <li>專案管理與執行能力</li>
      </ul>
    </div>

    <div class="result-group">
      <h4>主要工作內容</h4>
      <ul>
        <li>協助推動專案與追蹤進度</li>
        <li>整理資料並提出可執行的洞察</li>
        <li>與不同團隊及利害關係人合作</li>
      </ul>
    </div>

    <div class="result-group">
      <h4>履歷建議</h4>
      <ul>
        <li>優先呈現跨團隊合作經驗</li>
        <li>強調分析工具與數據處理能力</li>
        <li>使用具體動詞描述自己的實際貢獻</li>
      </ul>
    </div>
  `;
});

mockBtn.addEventListener("click", () => {
  mockStatus.textContent = "MVP 示範：未來版本將在這裡啟動 AI 模擬面試。";
});
