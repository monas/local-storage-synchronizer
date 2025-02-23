
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">LocalStorage Demo</h1>
        <p className="text-gray-600 mb-4">
          Type something below. The text will be saved automatically and synced between tabs.
        </p>
        <textarea
          id="storage-demo"
          className="w-full h-40 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Start typing..."
          onChange={(e) => {
            localStorage.setItem('demo-text', e.target.value);
          }}
          defaultValue={localStorage.getItem('demo-text') || ''}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load initial value
            const textarea = document.getElementById('storage-demo');
            textarea.value = localStorage.getItem('demo-text') || '';

            // Listen for storage changes from other tabs
            window.addEventListener('storage', (e) => {
              if (e.key === 'demo-text') {
                textarea.value = e.newValue || '';
              }
            });
          `
        }} />
      </div>
    </div>
  );
};

export default Index;
