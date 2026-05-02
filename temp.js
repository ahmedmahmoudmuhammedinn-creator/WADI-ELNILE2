
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        cairo: ['Cairo', 'sans-serif'],
                    },
                },
            },
        }
    

        // --- Data Model & Initial Demo Data ---
        const DEMO_DATA = {
            projects: [
                { id: 'p1', name: 'سانت كاترين – تكييف وكلادينج', status: 'active', type: 'investment', currency: 'ج.م', budget: 5000000 },
                { id: 'p2', name: 'سانت كاترين – صحي', status: 'active', type: 'investment', currency: 'ج.م', budget: 2000000 },
                { id: 'p3', name: 'مراسي', status: 'active', type: 'investment', currency: 'ج.م', budget: 8000000 },
                { id: 'p4', name: 'وادي النيل (الثنائي)', status: 'active', type: 'dual', currency: 'ج.م', budget: 0 },
                { id: 'p5', name: 'الثلاثي (الخزينة المشتركة)', status: 'active', type: 'triple', currency: 'ج.م', budget: 0 }
            ],
            partners: [
                { id: 'm1', name: 'م. محتسب', share: 33.33 },
                { id: 'm2', name: 'م. عصام', share: 33.33 },
                { id: 'm3', name: 'م. ناصر', share: 33.33 }
            ],
            employees: [
                { id: 'e1', name: 'م. محمود', job: 'مهندس تنفيذ', site: 'سانت كاترين', salary: 12000 },
                { id: 'e2', name: 'محمد رضوان', job: 'فني تكييف', site: 'مراسي', salary: 10200 },
                { id: 'e3', name: 'أحمد علي', job: 'مساعد فني', site: 'وادي النيل', salary: 7500 }
            ],
            transactions: [
                { id: 't1', projectId: 'p1', date: '2026-04-15', desc: 'وارد مستخلص رقم 4', amount: 2510710, type: 'in', category: 'وارد مستخلص', method: 'bank' },
                { id: 't2', projectId: 'p1', date: '2026-04-18', desc: 'شراء خامات نحاس وعزل', amount: 2418143, type: 'out', category: 'مواد خام', method: 'cash' },
                { id: 't3', projectId: 'p2', date: '2026-04-10', desc: 'وارد مستخلص أعمال صحية', amount: 1067999, type: 'in', category: 'وارد مستخلص', method: 'bank' },
                { id: 't4', projectId: 'p2', date: '2026-04-20', desc: 'صرف مستحقات مقاول الباطن', amount: 1067999, type: 'out', category: 'أخرى', method: 'bank' },
                { id: 't5', projectId: 'p3', date: '2026-04-01', desc: 'دفعة تعاقد مراسي', amount: 4319405, type: 'in', category: 'وارد مستخلص', method: 'bank' },
                { id: 't6', projectId: 'p3', date: '2026-04-12', desc: 'مصروفات تشغيل ومواد', amount: 4318801, type: 'out', category: 'مواد خام', method: 'cash' }
            ],
            users: [
                { id: 'u1', name: 'أحمد محمود', username: 'ahmedmahmoudmuhammedinn@gmail.com', password: 'admin', role: 'admin' },
                { id: 'u2', name: 'م. محتسب', username: 'admin', password: 'admin123', role: 'admin' },
                { id: 'u3', name: 'محاسب الشركة', username: 'accountant', password: 'acc123', role: 'accountant' },
                { id: 'u4', name: 'م. موقع سانت كاترين', username: 'engineer', password: 'eng123', role: 'engineer', linkedProject: 'p1' },
                { id: 'u5', name: 'م. عصام (شريك)', username: 'partner', password: 'partner123', role: 'partner' }
            ],
            currentUser: null,
            partnerTransactions: [], 
            payroll: {}, 
            extracts: [
                { id: 'ext1', projectId: 'p1', date: '2026-04-01', number: '1', amount: 1000000, tax: 15000, net: 985000, status: 'received' },
                { id: 'ext2', projectId: 'p1', date: '2026-05-01', number: '2', amount: 2000000, tax: 30000, net: 1970000, status: 'pending' }
            ],
            tenders: [
                { id: 'ten1', name: 'توريد تكييفات وزارة العدل', date: '2026-04-10', amount: 15000000, status: 'pending', margin: 15 },
                { id: 'ten2', name: 'كلادينج مستشفى القصر العيني', date: '2026-03-20', amount: 4500000, status: 'won', margin: 12 }
            ],
            invoices: [
                { id: 'inv1', projectId: 'p1', number: 'INV-2026-001', date: '2026-04-20', client: 'شركة المقاولون العرب', amount: 250000, status: 'paid' },
                { id: 'inv2', projectId: 'p3', number: 'INV-2026-002', date: '2026-04-25', client: 'سوديك', amount: 180000, status: 'draft' }
            ],
            inventory: [
                { id: 'mt1', name: 'مواسير نحاس 5/8', unit: 'لفة', quantity: 150, minQuantity: 20, price: 1200 },
                { id: 'mt2', name: 'فريون R410', unit: 'أسطوانة', quantity: 15, minQuantity: 5, price: 5500 },
                { id: 'mt3', name: 'عزل أرموفلكس', unit: 'متر', quantity: 8, minQuantity: 100, price: 45 }
            ],
            archive: [
                { id: 'doc1', name: 'السجل التجاري', type: 'legal', expiry: '2026-12-31', status: 'valid' },
                { id: 'doc2', name: 'عقد مشروع مراسي', type: 'contract', projectId: 'p3', status: 'valid' }
            ],
            activityLog: [],
            notifications: [],
            settings: { 
                companyName: "شركة وادي النيل للمقاولات", 
                taxRate: 1.5,
                investorShare: 0.3,
                companyShare: 0.7,
                alertThreshold: 500000,
                alertEnabled: true,
                defaultCurrency: 'ج.م',
                projectFilter: 'active'
            }
        };

        let state;
        let currentSection = 'dashboard';
        let currentProjectId = null;
        const init = () => {
            try {
                const saved = localStorage.getItem('accounting_state');
                state = saved ? JSON.parse(saved) : { ...DEMO_DATA };
            } catch (e) {
                state = { ...DEMO_DATA };
            }

            // Data Migration & Defaults
            if (!state.partnerTransactions) state.partnerTransactions = [];
            if (!state.payroll) state.payroll = {};
            if (!state.extracts) state.extracts = [...DEMO_DATA.extracts];
            if (!state.tenders) state.tenders = [...DEMO_DATA.tenders];
            if (!state.invoices) state.invoices = [...DEMO_DATA.invoices];
            if (!state.inventory) state.inventory = [...DEMO_DATA.inventory];
            if (!state.archive) state.archive = [...DEMO_DATA.archive];
            if (!state.activityLog) state.activityLog = [];
            if (!state.notifications) state.notifications = [];
            if (!state.users) {
                state.users = [...DEMO_DATA.users];
                state.currentUser = null;
            }
            if (!state.settings) state.settings = { ...DEMO_DATA.settings };
            
            state.projects.forEach(p => { 
                if (!p.currency) p.currency = 'ج.م'; 
                if (!p.icon) p.icon = 'building-2';
            });
            state.transactions.forEach(t => { if (!t.method) t.method = 'cash'; });

            updateUserUI();
            updateNotificationUI();
            
            if (state.currentUser) {
                renderSidebarNav();
                renderSidebarProjects();
                
                const role = state.currentUser.role;
                if (role === 'partner') showSection('profit-dist');
                else if (role === 'engineer') showSection('project', state.currentUser.linkedProject);
                else showSection('dashboard');
            }
            
            document.getElementById('app-company-name').innerText = state.settings.companyName;
            lucide.createIcons();

            // Auto-save logic
            setInterval(() => {
                saveToLocalStorage();
                const lastSave = document.getElementById('last-save-time');
                if (lastSave) lastSave.innerText = new Date().toLocaleTimeString('ar-EG');
            }, 60000);
        };
        
        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                document.getElementById('global-search').focus();
            }
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                if (currentProjectId) openAddTransactionModal(currentProjectId);
                else showToast('يرجى اختيار مشروع لإضافة حركة جديدة', 'warning');
            }
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                window.print();
            }
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        const PROJECT_ICONS = [
            { name: 'buildings', icon: 'building-2' },
            { name: 'home', icon: 'home' },
            { name: 'construction', icon: 'construction' },
            { name: 'tools', icon: 'wrench' },
            { name: 'briefcase', icon: 'briefcase' },
            { name: 'hard-hat', icon: 'hard-hat' },
            { name: 'droplets', icon: 'droplets' },
            { name: 'zap', icon: 'zap' },
            { name: 'wind', icon: 'wind' },
            { name: 'truck', icon: 'truck' },
            { name: 'factory', icon: 'factory' },
            { name: 'bridge', icon: 'bridge' },
            { name: 'mountain', icon: 'mountain' },
            { name: 'layout', icon: 'layout' }
        ];

        // --- Helper Functions ---
        const formatMoney = (amount, projectId = null) => {
            let symbol = state.settings.defaultCurrency || 'ج.م';
            if (projectId) {
                const p = state.projects.find(pj => pj.id === projectId);
                if (p && p.currency) symbol = p.currency;
            }
            const formatted = Number(amount).toLocaleString('ar-EG', { minimumFractionDigits: 2 });
            return amount < 0 ? `(${formatted.replace('-', '')}) ${symbol}` : `${formatted} ${symbol}`;
        };

        const numberToArabicWords = (n) => {
            if (n === 0) return "صفر";
            const units = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة"];
            const teens = ["عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"];
            const tens = ["", "عشرة", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
            const hundreds = ["", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"];

            const convertLessThanThousand = (num) => {
                let res = "";
                if (num >= 100) {
                    res += hundreds[Math.floor(num / 100)];
                    num %= 100;
                    if (num > 0) res += " و ";
                }
                if (num >= 20) {
                    res += tens[Math.floor(num / 10)];
                    num %= 10;
                    if (num > 0) res += " و " + units[num];
                } else if (num >= 10) {
                    res += teens[num - 10];
                } else if (num > 0) {
                    res += units[num];
                }
                return res;
            };

            let res = "";
            let integerPart = Math.floor(n);
            if (integerPart >= 1000000) {
                res += convertLessThanThousand(Math.floor(integerPart / 1000000)) + " مليون ";
                integerPart %= 1000000;
                if (integerPart > 0) res += " و ";
            }
            if (integerPart >= 1000) {
                let thousands = Math.floor(integerPart / 1000);
                if (thousands === 1) res += "ألف";
                else if (thousands === 2) res += "ألفان";
                else res += convertLessThanThousand(thousands) + " آلاف";
                integerPart %= 1000;
                if (integerPart > 0) res += " و ";
            }
            res += convertLessThanThousand(integerPart);
            return res + " جنيهاً مصرياً لا غير";
        };

        const addActivityLog = (action, details) => {
            state.activityLog.unshift({
                id: Date.now(),
                user: state.currentUser ? state.currentUser.name : 'System',
                action,
                details,
                time: new Date().toISOString()
            });
            if (state.activityLog.length > 50) state.activityLog.pop();
            saveToLocalStorage();
        };

        const addNotification = (message, severity = 'info') => {
            state.notifications.unshift({
                id: 'n' + Date.now(),
                message,
                severity,
                read: false,
                time: new Date().toISOString()
            });
            saveToLocalStorage();
            updateNotificationUI();
        };

        const updateNotificationUI = () => {
            const unreadCount = state.notifications.filter(n => !n.read).length;
            const countBadge = document.getElementById('notification-count');
            if (countBadge) {
                if (unreadCount > 0) {
                    countBadge.innerText = unreadCount;
                    countBadge.classList.remove('hidden');
                } else {
                    countBadge.classList.add('hidden');
                }
            }
        };

        const toggleNotifications = () => {
            const html = `
                <div class="p-4 w-80 max-h-96 overflow-y-auto no-scrollbar">
                    <div class="flex items-center justify-between mb-4 pb-2 border-b">
                        <h4 class="font-bold text-slate-800">التنبيهات</h4>
                        <button onclick="markAllNotificationsRead()" class="text-[10px] text-blue-600 font-bold hover:underline">تعليم الكل كمقروء</button>
                    </div>
                    <div class="space-y-2">
                        ${state.notifications.length === 0 ? '<p class="text-xs text-gray-400 text-center py-4 italic">لا توجد تنبيهات جديدة</p>' : ''}
                        ${state.notifications.map(n => `
                            <div class="p-3 rounded-lg border flex gap-3 ${n.read ? 'bg-white opacity-60' : 'bg-blue-50 border-blue-100'}">
                                <div class="mt-1">
                                    <i data-lucide="${n.severity === 'error' ? 'alert-circle' : n.severity === 'warning' ? 'alert-triangle' : 'info'}" 
                                       class="w-4 h-4 ${n.severity === 'error' ? 'text-red-500' : n.severity === 'warning' ? 'text-amber-500' : 'text-blue-500'}"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-xs font-semibold text-slate-700 leading-normal">${n.message}</p>
                                    <p class="text-[9px] text-gray-400 mt-1">${new Date(n.time).toLocaleString('ar-EG')}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${state.notifications.length > 0 ? `
                        <button onclick="clearNotifications()" class="w-full mt-4 py-2 text-[10px] text-red-500 font-bold hover:bg-red-50 rounded transition">مسح الكل</button>
                    ` : ''}
                </div>
            `;
            // Simplified dropdown as a modal for now or we could use another way
            openModal(html, 'sm');
        };

        const markAllNotificationsRead = () => {
            state.notifications.forEach(n => n.read = true);
            saveToLocalStorage();
            updateNotificationUI();
            closeModal();
            showToast('تم تحديث التنبيهات');
        };

        const clearNotifications = () => {
            state.notifications = [];
            saveToLocalStorage();
            updateNotificationUI();
            closeModal();
            showToast('تم مسح كافة التنبيهات');
        };

        const formatDate = (dateStr) => {
            if (!dateStr) return '';
            const d = new Date(dateStr);
            return d.toLocaleDateString('ar-EG');
        };

        const saveToLocalStorage = () => {
            try {
                localStorage.setItem('accounting_state', JSON.stringify(state));
                const now = new Date();
                const lastSavedEl = document.getElementById('last-saved');
                if (lastSavedEl) {
                    lastSavedEl.innerText = now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
                }
            } catch (e) {
                console.error("Failed to save to localStorage", e);
            }
        };

        const handleLogin = (e) => {
            e.preventDefault();
            const user = document.getElementById('login-user').value.trim();
            const pass = document.getElementById('login-pass').value.trim();
            const remember = document.getElementById('login-remember').checked;
            
            if (!state.users) state.users = DEMO_DATA.users;
            const foundUser = state.users.find(u => u.username.toLowerCase() === user.toLowerCase() && u.password === pass);
            
            if (foundUser) {
                state.currentUser = foundUser;
                document.getElementById('login-overlay').classList.replace('login-visible', 'login-hidden');
                
                if (remember) {
                    saveToLocalStorage();
                }
                
                updateUserUI();
                renderSidebarNav();
                renderSidebarProjects();
                
                // Set initial landing based on role
                if (foundUser.role === 'engineer' && foundUser.linkedProject) {
                    showSection('project', foundUser.linkedProject);
                } else if (foundUser.role === 'partner') {
                    showSection('profit-dist');
                } else {
                    showSection('dashboard');
                }
                
                showToast(`مرحباً بك، ${foundUser.name}`);
            } else {
                const errEl = document.getElementById('login-error');
                errEl.classList.remove('hidden');
                errEl.innerText = "خطأ في اسم المستخدم أو كلمة المرور";
            }
        };

        const handleLogout = () => {
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
                state.currentUser = null;
                saveToLocalStorage();
                window.location.reload();
            }
        };

        const updateUserUI = () => {
            const user = state.currentUser;
            const overlay = document.getElementById('login-overlay');
            if (!user) {
                overlay.classList.replace('login-hidden', 'login-visible');
                return;
            }
            
            if (document.getElementById('user-display-name')) {
                document.getElementById('user-display-name').innerText = user.name;
            }
            const roleLabels = {
                admin: 'المدير العام',
                accountant: 'المحاسب',
                engineer: 'مهندس الموقع',
                partner: 'الشريك'
            };
            if (document.getElementById('user-display-role')) {
                document.getElementById('user-display-role').innerText = roleLabels[user.role] || user.role;
            }
            if (document.getElementById('user-avatar')) {
                document.getElementById('user-avatar').innerText = user.name ? user.name[0] : '?';
            }
            
            overlay.classList.replace('login-visible', 'login-hidden');
        };

        const canAccess = (section, projectId = null) => {
            const user = state.currentUser;
            if (!user) return false;
            if (user.role === 'admin') return true;
            
            if (user.role === 'accountant') {
                return ['dashboard', 'project', 'treasury', 'payroll', 'reports', 'settings'].includes(section);
            }
            
            if (user.role === 'engineer') {
                if (section === 'project') return projectId === user.linkedProject;
                return ['payroll'].includes(section); // Can manage site payroll
            }
            
            if (user.role === 'partner') {
                return ['profit-dist', 'treasury'].includes(section);
            }
            
            return false;
        };

        const showToast = (message, type = 'success') => {
            const toast = document.createElement('div');
            let colorClass = 'bg-green-600';
            let icon = 'check-circle';
            
            if (type === 'error') {
                colorClass = 'bg-red-600';
                icon = 'alert-circle';
            } else if (type === 'warning') {
                colorClass = 'bg-amber-500';
                icon = 'alert-triangle';
            }
            
            toast.className = `${colorClass} text-white px-5 py-4 rounded-xl shadow-2xl flex items-start gap-4 animate-bounce-in min-w-[320px] max-w-sm border border-white/20`;
            toast.innerHTML = `
                <div class="mt-0.5"><i data-lucide="${icon}" class="w-6 h-6"></i></div>
                <div class="flex-1">
                    <p class="text-sm font-bold leading-tight">${message}</p>
                </div>
                <button onclick="this.parentElement.remove()" class="text-white/70 hover:text-white"><i data-lucide="x" class="w-4 h-4"></i></button>
            `;
            document.getElementById('toast-container').appendChild(toast);
            lucide.createIcons();
            
            // Auto remove after 5 seconds for warnings, 3 for others
            const delay = type === 'warning' ? 5000 : 3000;
            setTimeout(() => { if (toast.parentElement) toast.remove(); }, delay);
        };

        const openModal = (htmlContent, size = 'md') => {
            const modal = document.getElementById('modal-container');
            const content = document.getElementById('modal-content');
            
            content.className = `bg-white rounded-lg shadow-2xl relative w-full mx-4 transform transition-all ${size === 'sm' ? 'max-w-md' : size === 'lg' ? 'max-w-4xl' : 'max-w-2xl'}`;
            content.innerHTML = `
                <button onclick="closeModal()" class="absolute top-4 left-4 p-2 text-gray-400 hover:text-red-500 transition no-print" title="إغلاق">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
                ${htmlContent}
            `;
            modal.classList.remove('hidden');
            lucide.createIcons();
        };

        document.getElementById('modal-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        });

        const closeModal = () => {
            document.getElementById('modal-container').classList.add('hidden');
        };

        // --- Routing / Navigation ---
        let currentProjectStatusFilter = 'active';

        const updateProjectFilter = (status) => {
            state.settings.projectFilter = status;
            saveToLocalStorage();
            renderSidebarProjects();
            // If we are in settings, we should re-render to keep dropdowns in sync
            if (currentSection === 'settings') renderSettings(document.getElementById('content-area'));
        };

        const toggleProjectStatus = (pid) => {
            if (state.currentUser.role !== 'admin') {
                showToast('هذه الصلاحية متاحة للمدير العام فقط', 'error');
                return;
            }
            const p = state.projects.find(pj => pj.id === pid);
            if (!p) return;
            p.status = p.status === 'active' ? 'archived' : 'active';
            if (!p.icon) p.icon = 'building-2';
            saveToLocalStorage();
            renderSidebarProjects();
            renderProjectView(document.getElementById('content-area'), pid);
            showToast(p.status === 'active' ? 'تم تفعيل المشروع' : 'تم أرشفة المشروع');
        };

        const showSection = (sectionName, projectId = null) => {
            if (!canAccess(sectionName, projectId)) {
                showToast('غير مسموح لك بالوصول لهذا القسم', 'error');
                return;
            }
            
            currentSection = sectionName;
            currentProjectId = projectId;
            
            renderSidebarNav(); // Force refresh nav state and active classes
            
            closeModal();
            renderContent();
            
            // Close mobile menu if open
            document.getElementById('sidebar').classList.remove('open');
        };

        // --- Core Rendering Functions ---
        const renderContent = () => {
            const container = document.getElementById('content-area');
            const pageTitle = document.getElementById('page-title');
            const pageDesc = document.getElementById('page-description');

            if (currentProjectId) {
                const project = state.projects.find(p => p.id === currentProjectId);
                pageTitle.innerHTML = `<div class="flex items-center gap-2"><i data-lucide="${project.icon || 'building-2'}" class="w-6 h-6 text-blue-600"></i> ${project.name}</div>`;
                pageDesc.innerText = "تفاصيل العمليات والنتائج المالية للمشروع";
                renderProjectView(container, currentProjectId);
                lucide.createIcons();
                return;
            }

            switch(currentSection) {
                case 'dashboard':
                    pageTitle.innerText = "لوحة التحكم";
                    pageDesc.innerText = "نظرة عامة على كافة المشاريع والشركاء";
                    renderDashboard(container);
                    break;
                case 'treasury':
                    pageTitle.innerText = "الخزينة";
                    pageDesc.innerText = "إدارة التدفقات المالية للثنائي والثلاثي";
                    renderTreasury(container);
                    break;
                case 'payroll':
                    pageTitle.innerText = "الرواتب والحضور";
                    pageDesc.innerText = "متابعة حضور الموظفين وكشوف المرتبات الشهرية";
                    renderPayroll(container);
                    break;
                case 'profit-dist':
                    pageTitle.innerText = "توزيع الأرباح";
                    pageDesc.innerText = "توزيع صافي الأرباح بين الشركة والممول والشركاء";
                    renderProfitDist(container);
                    break;
                case 'extracts':
                    pageTitle.innerText = "المستخلصات";
                    pageDesc.innerText = "تتبع مستخلصات المشاريع والضرائب المستقطعة";
                    renderExtracts(container);
                    break;
                case 'invoices':
                    pageTitle.innerText = "الفواتير";
                    pageDesc.innerText = "إدارة فواتير العملاء والموردين";
                    renderInvoices(container);
                    break;
                case 'tenders':
                    pageTitle.innerText = "العطاءات";
                    pageDesc.innerText = "متابعة المناقصات والفرص الاستثمارية";
                    renderTenders(container);
                    break;
                case 'inventory':
                    pageTitle.innerText = "المخزون";
                    pageDesc.innerText = "إدارة المواد الخام والعدد والأدوات";
                    renderInventory(container);
                    break;
                case 'archive':
                    pageTitle.innerText = "الأرشيف";
                    pageDesc.innerText = "المستندات القانونية والعقود والسجلات";
                    renderArchive(container);
                    break;
                case 'users':
                    pageTitle.innerText = "إدارة المستخدمين";
                    pageDesc.innerText = "الصلاحيات وسجل النشاط البرمجي";
                    renderUsers(container);
                    break;
                case 'reports':
                    pageTitle.innerText = "التقارير التحليلية";
                    pageDesc.innerText = "تحليل الأداء المالي والربحية للمشاريع";
                    renderReports(container);
                    break;
                case 'settings':
                    pageTitle.innerText = "الإعدادات العامة";
                    pageDesc.innerText = "تهيئة النظام والنسخ الاحتياطي والعملات";
                    renderSettings(container);
                    break;
            }
            checkProjectAlerts();
            lucide.createIcons();
        };

        const renderDashboard = (container) => {
            const stats = calculateGlobalStats();
            container.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div class="stat-card income">
                        <p class="stat-label">إجمالي الإيرادات</p>
                        <p class="stat-value">${formatMoney(stats.totalIn)}</p>
                    </div>
                    <div class="stat-card expense">
                        <p class="stat-label">إجمالي المصروفات</p>
                        <p class="stat-value">${formatMoney(stats.totalOut)}</p>
                    </div>
                    <div class="stat-card profit">
                        <p class="stat-label">صافي الربح الكلي</p>
                        <p class="stat-value ${stats.net >= 0 ? '!text-green-600' : '!text-red-600'}">${formatMoney(stats.net)}</p>
                    </div>
                    <div class="stat-card cash">
                        <p class="stat-label">الرصيد النقدي الحالي</p>
                        <p class="stat-value">${formatMoney(stats.net)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="card lg:col-span-2">
                        <div class="card-header">
                            <h3 class="card-title flex items-center">آخر المعاملات المالية</h3>
                            <button class="text-xs text-blue-600 hover:underline">عرض الكل</button>
                        </div>
                        <div class="card-body">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>التاريخ</th>
                                        <th>المشروع</th>
                                        <th>المبلغ</th>
                                        <th>الحالة</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${state.transactions.slice(-6).reverse().map(t => {
                                        const p = state.projects.find(pj => pj.id === t.projectId) || {name: '--'};
                                        return `
                                            <tr>
                                                <td>${formatDate(t.date)}</td>
                                                <td class="font-semibold">${p.name}</td>
                                                <td class="font-bold">${formatMoney(t.amount, t.projectId)}</td>
                                                <td>
                                                    <span class="badge ${t.type === 'in' ? 'badge-success' : 'badge-danger'}">
                                                        ${t.type === 'in' ? 'إيراد' : 'مصروف'}
                                                    </span>
                                                </td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">مقارنة الإيرادات/المصروفات</h3>
                        </div>
                        <div class="card-body flex flex-col h-[300px]">
                            <canvas id="projectsChart"></canvas>
                        </div>
                    </div>
                </div>
            `;
            initDashboardCharts();
        };

        let currentProjectTab = 'summary';

        const renderProjectView = (container, pid) => {
            const project = state.projects.find(p => p.id === pid);
            const txs = state.transactions.filter(t => t.projectId === pid).sort((a, b) => new Date(b.date) - new Date(a.date));
            const projectInvoices = state.invoices.filter(i => i.projectId === pid);
            const projectExtracts = state.extracts.filter(e => e.projectId === pid);
            const stats = calculateProjectStats(pid);

            container.innerHTML = `
                ${project.description ? `<div class="bg-blue-50 border-r-4 border-blue-500 p-3 mb-4 rounded-l-lg animate-fade-in"><p class="text-xs text-blue-800 font-semibold">${project.description}</p></div>` : ''}
                
                <!-- Tabs Navigation -->
                <div class="flex items-center space-x-4 space-x-reverse mb-6 border-b no-print">
                    <button onclick="currentProjectTab='summary'; renderProjectView(document.getElementById('content-area'), '${pid}')" 
                            class="pb-3 px-1 text-sm font-bold transition-all border-b-2 ${currentProjectTab === 'summary' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}">الملخص المالي</button>
                    <button onclick="currentProjectTab='transactions'; renderProjectView(document.getElementById('content-area'), '${pid}')" 
                            class="pb-3 px-1 text-sm font-bold transition-all border-b-2 ${currentProjectTab === 'transactions' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}">المعاملات (${txs.length})</button>
                    <button onclick="currentProjectTab='extracts'; renderProjectView(document.getElementById('content-area'), '${pid}')" 
                            class="pb-3 px-1 text-sm font-bold transition-all border-b-2 ${currentProjectTab === 'extracts' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}">المستخلصات (${projectExtracts.length})</button>
                    <button onclick="currentProjectTab='invoices'; renderProjectView(document.getElementById('content-area'), '${pid}')" 
                            class="pb-3 px-1 text-sm font-bold transition-all border-b-2 ${currentProjectTab === 'invoices' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}">الفواتير (${projectInvoices.length})</button>
                </div>

                <div id="project-tab-content">
                    ${currentProjectTab === 'summary' ? renderProjectSummary(pid, stats) : ''}
                    ${currentProjectTab === 'transactions' ? renderProjectTransactions(pid, txs, project) : ''}
                    ${currentProjectTab === 'extracts' ? renderProjectExtractsList(projectExtracts) : ''}
                    ${currentProjectTab === 'invoices' ? renderProjectInvoicesList(projectInvoices) : ''}
                </div>
            `;
            lucide.createIcons();
        };

        const renderProjectSummary = (pid, stats) => {
            const project = state.projects.find(p => p.id === pid);
            const progressPercent = project.budget ? Math.min(100, (stats.totalOut / project.budget) * 100) : 0;
            
            return `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="stat-card income !py-3">
                        <p class="stat-label">إجمالي الإيرادات</p>
                        <p class="stat-value text-blue-600 font-mono">${formatMoney(stats.totalIn, pid)}</p>
                    </div>
                    <div class="stat-card expense !py-3">
                        <p class="stat-label">إجمالي المصروفات</p>
                        <p class="stat-value text-red-600 font-mono">${formatMoney(stats.totalOut, pid)}</p>
                    </div>
                    <div class="stat-card profit !py-3">
                        <p class="stat-label">صافي الربح / الخسارة</p>
                        <p class="stat-value ${stats.net >= 0 ? 'text-green-600' : 'text-red-600'} font-mono">${formatMoney(stats.net, pid)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="lg:col-span-2 space-y-6">
                        <div class="card p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h4 class="font-bold text-slate-800">معدل الإنجاز المالي (مقارنة بالميزانية)</h4>
                                <span class="text-xs font-bold text-blue-600">${formatMoney(project.budget)} (الميزانية)</span>
                            </div>
                            <div class="w-full bg-slate-100 h-4 rounded-full overflow-hidden mb-2">
                                <div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: ${progressPercent}%"></div>
                            </div>
                            <div class="flex justify-between text-[10px] font-bold text-gray-400">
                                <span>تم إنفاق: ${formatMoney(stats.totalOut)}</span>
                                <span>نسبة الإنفاق: %${progressPercent.toFixed(1)}</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title flex items-center gap-2">
                                    <i data-lucide="wallet" class="w-5 h-5 text-indigo-500"></i>
                                    الموقع المالي التفصيلي
                                </h3>
                            </div>
                            <div class="card-body p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center">
                                    <span class="text-[10px] font-bold text-gray-400 uppercase mb-1">نقدية (كاش)</span>
                                    <span class="font-bold font-mono ${stats.cashBalance >= 0 ? 'text-slate-800' : 'text-red-600'}">${formatMoney(stats.cashBalance, pid)}</span>
                                </div>
                                <div class="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center">
                                    <span class="text-[10px] font-bold text-gray-400 uppercase mb-1">رصيد البنك</span>
                                    <span class="font-bold font-mono ${stats.bankBalance >= 0 ? 'text-slate-800' : 'text-red-600'}">${formatMoney(stats.bankBalance, pid)}</span>
                                </div>
                                <div class="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center">
                                    <span class="text-[10px] font-bold text-gray-400 uppercase mb-1">بطاقة فيزا</span>
                                    <span class="font-bold font-mono ${stats.ccBalance >= 0 ? 'text-slate-800' : 'text-red-600'}">${formatMoney(stats.ccBalance, pid)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">توزيع أرباح الشركاء</h4>
                        </div>
                        <div class="card-body p-4 space-y-4">
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <span class="text-[10px] font-bold text-blue-800 opacity-60 block mb-1">نصيب الشركة (70%)</span>
                                <span class="text-xl font-black text-blue-900 font-mono">${formatMoney(stats.companyProfit, pid)}</span>
                            </div>
                            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                <span class="text-[10px] font-bold text-emerald-800 opacity-60 block mb-1">نصيب الممول (30%)</span>
                                <span class="text-xl font-black text-emerald-900 font-mono">${formatMoney(stats.investorProfit, pid)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        const renderProjectTransactions = (pid, txs, project) => {
            return `
                <div class="card">
                    <div class="card-header no-print">
                        <h3 class="card-title">سجل العمليات</h3>
                        <div class="flex space-x-2 space-x-reverse">
                            <button onclick="openAddTransactionModal('${pid}')" class="btn-primary flex items-center gap-1 shadow-md shadow-blue-100">
                                <i data-lucide="plus" class="w-3.5 h-3.5"></i> حركة جديدة
                            </button>
                            <button onclick="triggerExcelImport('${pid}')" class="p-2 px-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition flex items-center gap-2">
                                <i data-lucide="file-up" class="w-4 h-4"></i>
                                <span class="text-[10px] font-bold">رفع إكسيل</span>
                            </button>
                            <input type="file" id="excel-import-input-${pid}" class="hidden" accept=".xlsx, .xls, .csv" onchange="handleExcelImport(event, '${pid}')">
                            <button onclick="exportToExcel('${pid}')" class="p-2 border rounded hover:bg-gray-50 text-gray-600"><i data-lucide="file-spreadsheet" class="w-4 h-4"></i></button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="overflow-x-auto">
                            <table class="data-table" id="project-table-${pid}">
                                <thead class="sticky top-0 bg-white shadow-sm">
                                    <tr>
                                        <th>التاريخ</th>
                                        <th>البيان</th>
                                        <th>الطريقة</th>
                                        <th>إيرادات</th>
                                        <th>مصروفات</th>
                                        <th class="no-print">إجراء</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${txs.map(t => `
                                        <tr class="hover:bg-slate-50 transition">
                                            <td>${formatDate(t.date)}</td>
                                            <td>
                                                <p class="font-bold text-slate-700 text-xs">${t.category}</p>
                                                <p class="text-[10px] text-gray-400 truncate max-w-[150px]">${t.desc || ''}</p>
                                            </td>
                                            <td>
                                                <span class="text-[9px] px-2 py-0.5 rounded-full border ${t.method === 'bank' ? 'bg-blue-50 text-blue-600 border-blue-200' : t.method === 'cc' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-50 text-slate-600 border-slate-200'}">
                                                    ${t.method === 'bank' ? 'بنك' : t.method === 'cc' ? 'فيزا' : 'كاش'}
                                                </span>
                                            </td>
                                            <td class="text-green-600 font-bold">${t.type === 'in' ? formatMoney(t.amount, pid) : '--'}</td>
                                            <td class="text-red-600 font-bold">${t.type === 'out' ? formatMoney(t.amount, pid) : '--'}</td>
                                            <td class="no-print">
                                                <button onclick="deleteTransaction('${t.id}', '${pid}')" class="text-red-300 hover:text-red-600 transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                    ${txs.length === 0 ? '<tr><td colspan="6" class="text-center py-12 text-gray-400 italic">لا توجد عمليات مسجلة</td></tr>' : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        };

        const renderProjectExtractsList = (extracts) => {
            return `
                <div class="card p-0 overflow-hidden">
                    <table class="data-table">
                        <thead class="bg-slate-50">
                            <tr>
                                <th>رقم</th>
                                <th>التاريخ</th>
                                <th>القيمة</th>
                                <th>الصافي بعد الضريبة</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${extracts.map(e => `
                                <tr>
                                    <td class="font-bold">#${e.number}</td>
                                    <td>${formatDate(e.date)}</td>
                                    <td class="font-bold text-blue-600">${formatMoney(e.amount)}</td>
                                    <td class="font-black text-slate-800">${formatMoney(e.net)}</td>
                                    <td>
                                        <span class="badge ${e.status === 'received' ? 'badge-success' : 'badge-danger'}">
                                            ${e.status === 'received' ? 'مستلم' : 'قيد الانتظار'}
                                        </span>
                                    </td>
                                </tr>
                            `).join('')}
                            ${extracts.length === 0 ? '<tr><td colspan="5" class="text-center py-12 text-gray-400 italic">لا توجد مستخلصات مسجلة لهذا المشروع</td></tr>' : ''}
                        </tbody>
                    </table>
                </div>
            `;
        };

        const renderProjectInvoicesList = (invoices) => {
            return `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${invoices.map(inv => `
                        <div class="card p-4 flex flex-row items-center justify-between hover:border-blue-300 transition">
                            <div>
                                <h5 class="text-xs font-bold text-gray-400 mb-1">${inv.number}</h5>
                                <h4 class="font-black text-slate-800">${inv.client}</h4>
                                <p class="text-xs text-gray-500">${formatDate(inv.date)}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-lg font-black text-blue-600">${formatMoney(inv.amount)}</p>
                                <span class="badge ${inv.status === 'paid' ? 'badge-success' : 'badge-danger'} text-[9px]">${inv.status === 'paid' ? 'مدفوعة' : 'مسودة'}</span>
                            </div>
                        </div>
                    `).join('')}
                    ${invoices.length === 0 ? '<div class="col-span-2 py-12 text-center text-gray-400 italic">لا توجد فواتير مرتبطة</div>' : ''}
                </div>
            `;
        };

        const renderPayroll = (container) => {
            const currentMonth = document.getElementById('payroll-month')?.value || new Date().getMonth() + 1;
            
            container.innerHTML = `
                <div class="flex items-center justify-between mb-4 no-print">
                    <div class="flex items-center space-x-2 space-x-reverse">
                         <select id="payroll-month" class="p-1.5 border rounded text-sm font-bold bg-white" onchange="renderPayroll(document.getElementById('content-area'))">
                            ${[...Array(12)].map((_, i) => `<option value="${i+1}" ${currentMonth == i+1 ? 'selected' : ''}>شهر ${i+1}</option>`).join('')}
                         </select>
                         <button onclick="openAddEmployeeModal()" class="btn-primary flex items-center gap-1"><i data-lucide="user-plus" class="w-3.5 h-3.5"></i> إضافة موظف</button>
                    </div>
                    <button onclick="window.print()" class="text-xs text-blue-600 hover:underline flex items-center gap-1"><i data-lucide="printer" class="w-3.5 h-3.5"></i> طباعة الكشوف</button>
                </div>

                <div class="space-y-4">
                    ${(() => {
                        const user = state.currentUser;
                        const filteredEmployees = state.employees.filter(emp => {
                            if (user.role === 'engineer' && user.linkedProject) {
                                const project = state.projects.find(p => p.id === user.linkedProject);
                                // Check if employee site matches project name (or starts with it)
                                return project && (emp.site.includes(project.name.split(' – ')[0]) || project.name.includes(emp.site));
                            }
                            return true;
                        });
                        
                        return filteredEmployees.map(emp => {
                            const mData = state.payroll[currentMonth]?.[emp.id] || { attendance: Array(30).fill(1), overtime: 0, bonus: 0, advance: 0 };
                            const finalSalary = calculateSalary(emp.id, emp.salary, currentMonth);
                            
                            return `
                            <div class="card">
                                <div class="card-header bg-slate-50/50">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">${emp.name[0]}</div>
                                        <div>
                                            <h4 class="text-sm font-bold text-slate-800">${emp.name}</h4>
                                            <p class="text-[10px] text-gray-500">${emp.job} | ${emp.site}</p>
                                        </div>
                                    </div>
                                    <div class="text-left">
                                        <span class="text-[10px] text-gray-400 block">الراتب الأساسي</span>
                                        <span class="text-sm font-bold text-slate-700">${formatMoney(emp.salary)}</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="flex flex-col lg:flex-row gap-6">
                                        <div class="flex-1">
                                            <div class="grid grid-cols-10 sm:grid-cols-15 gap-1 mb-2">
                                                ${mData.attendance.map((present, i) => `
                                                    <div class="flex flex-col items-center p-1 border ${present ? 'border-blue-100 bg-blue-50/30' : 'border-gray-100'} rounded">
                                                        <span class="text-[9px] text-gray-400">${i+1}</span>
                                                        <input type="checkbox" class="w-3 h-3 rounded text-blue-600 border-gray-300" ${present ? 'checked' : ''} 
                                                               onchange="updateAttendance('${emp.id}', ${currentMonth}, ${i}, this.checked)">
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                        <div class="lg:w-72 grid grid-cols-2 gap-2">
                                            <div class="p-2 border rounded bg-slate-50">
                                                <label class="block text-[9px] font-bold text-gray-400">ساعات إضافي</label>
                                                <input type="number" value="${mData.overtime || 0}" class="w-full bg-transparent border-none p-0 text-xs font-bold focus:ring-0" 
                                                       onchange="updatePayrollField('${emp.id}', ${currentMonth}, 'overtime', this.value)">
                                            </div>
                                            <div class="p-2 border rounded bg-slate-50">
                                                <label class="block text-[9px] font-bold text-gray-400">سلف/خصم</label>
                                                <input type="number" value="${mData.advance || 0}" class="w-full bg-transparent border-none p-0 text-xs font-bold text-red-600 focus:ring-0" 
                                                       onchange="updatePayrollField('${emp.id}', ${currentMonth}, 'advance', this.value)">
                                            </div>
                                            <div class="col-span-2 p-2 bg-blue-600 text-white rounded">
                                                <div class="flex justify-between items-center mb-1">
                                                    <span class="text-[10px] font-bold opacity-80 uppercase tracking-tight">الصافي النهائـي</span>
                                                    <span class="font-bold text-sm salary-final" id="salary-${emp.id}">${formatMoney(finalSalary)}</span>
                                                </div>
                                                <p class="text-[8px] opacity-70 text-left font-bold" id="salary-words-${emp.id}">${numberToArabicWords(finalSalary)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
                        }).join('') + (filteredEmployees.length === 0 ? '<div class="p-12 text-center text-gray-400 italic">لا توجد سجلات للموقع الحالي</div>' : '');
                    })()}
                </div>
            `;
            lucide.createIcons();
        };

        const updateAttendance = (empId, month, dayIdx, value) => {
            if (!state.payroll[month]) state.payroll[month] = {};
            if (!state.payroll[month][empId]) state.payroll[month][empId] = { attendance: Array(30).fill(1), overtime: 0, bonus: 0, advance: 0 };
            
            state.payroll[month][empId].attendance[dayIdx] = value ? 1 : 0;
            saveToLocalStorage();
            
            const emp = state.employees.find(e => e.id === empId);
            const newSalary = calculateSalary(empId, emp.salary, month);
            document.getElementById(`salary-${empId}`).innerText = formatMoney(newSalary);
        };

        const updatePayrollField = (empId, month, field, value) => {
            if (!state.payroll[month]) state.payroll[month] = {};
            if (!state.payroll[month][empId]) state.payroll[month][empId] = { attendance: Array(30).fill(1), overtime: 0, bonus: 0, advance: 0 };
            
            state.payroll[month][empId][field] = parseFloat(value) || 0;
            saveToLocalStorage();
            
            const emp = state.employees.find(e => e.id === empId);
            const newSalary = calculateSalary(empId, emp.salary, month);
            document.getElementById(`salary-${empId}`).innerText = formatMoney(newSalary);
        };

        const openAddEmployeeModal = () => {
            const html = `
                <div class="p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <i data-lucide="user-plus" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-extrabold text-slate-800">إضافة موظف جديد</h3>
                            <p class="text-xs text-gray-500">أدخل بيانات الموظف الأساسية والراتب</p>
                        </div>
                    </div>
                    <form id="employee-form" onsubmit="saveEmployee(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-slate-700">اسم الموظف</label>
                            <input type="text" id="emp-name" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-slate-700">الوظيفة / المسمى الوظيفي</label>
                                <input type="text" id="emp-job" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-slate-700">الموقع / المشروع</label>
                                <input type="text" id="emp-site" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-slate-700">الراتب الأساسي</label>
                            <input type="number" id="emp-salary" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition font-bold text-blue-600">
                        </div>
                        <div class="flex justify-end space-x-2 space-x-reverse pt-6">
                            <button type="button" onclick="closeModal()" class="px-5 py-2.5 text-gray-400 hover:text-gray-600 font-bold transition">إلغاء</button>
                            <button type="submit" class="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">إضافة الموظف</button>
                        </div>
                    </form>
                </div>
            `;
            openModal(html);
            lucide.createIcons();
        };

        const saveEmployee = (e) => {
            e.preventDefault();
            const newEmp = {
                id: 'e' + Date.now(),
                name: document.getElementById('emp-name').value,
                job: document.getElementById('emp-job').value,
                site: document.getElementById('emp-site').value,
                salary: parseFloat(document.getElementById('emp-salary').value)
            };
            state.employees.push(newEmp);
            saveToLocalStorage();
            closeModal();
            showSection('payroll');
            showToast('تم إضافة الموظف بنجاح');
        };

        const calculatePartnerBalance = (partnerId, entityId) => {
            const txs = state.partnerTransactions.filter(t => t.partnerId === partnerId && t.entityId === entityId);
            const totalIn = txs.filter(t => t.type === 'in').reduce((sum, t) => sum + t.amount, 0);
            const totalOut = txs.filter(t => t.type === 'out').reduce((sum, t) => sum + t.amount, 0);
            return totalIn - totalOut;
        };

        const renderTreasury = (container) => {
            const dualProjects = state.projects.filter(p => p.type === 'dual');
            const tripleProjects = state.projects.filter(p => p.type === 'triple');
            const totalBank = state.transactions
                .filter(t => t.method === 'bank')
                .reduce((sum, t) => sum + (t.type === 'in' ? t.amount : -t.amount), 0);

            container.innerHTML = `
                <div class="card mb-6 p-4 !border-t-4 !border-t-blue-600">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div class="md:w-1/3">
                            <h3 class="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2">
                                <i data-lucide="landmark" class="w-5 h-5 text-blue-600"></i>
                                إجمالي السيولة البنكية
                            </h3>
                            <p class="text-xs text-gray-500 mb-4">التدفقات النقدية عبر كافة الحسابات والشركاء</p>
                            <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                                <p class="text-2xl font-black text-blue-700 font-mono">${formatMoney(totalBank)}</p>
                                <span class="text-[10px] text-blue-500 font-bold uppercase">الرصيد الكلي المجمع اليوم</span>
                            </div>
                        </div>
                        <div class="md:w-2/3 w-full h-[180px]">
                            <canvas id="bankBalanceChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Dual Entity -->
                    <div class="card !border-t-4 !border-t-blue-500">
                        <div class="card-header flex justify-between items-center">
                            <div>
                                <h3 class="card-title">كيان الثنائي (الرئيسي)</h3>
                                <p class="text-[10px] text-gray-500">تمثيل: م. محتسب + م. عصام / م. ناصر</p>
                            </div>
                            <button onclick="openPartnerTxModal('dual')" class="btn-primary !py-1 !px-2 text-[10px]">إجراء حركة شريك</button>
                        </div>
                        <div class="card-body">
                            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase">مشاريع الكيان</h4>
                            <div class="space-y-2 mb-6">
                                ${dualProjects.map(p => {
                                    const s = calculateProjectStats(p.id);
                                    return `
                                        <div class="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100 hover:border-blue-200 transition cursor-pointer" onclick="showSection('project', '${p.id}')">
                                            <span class="text-sm font-bold text-slate-700">${p.name}</span>
                                            <p class="font-bold text-blue-600 text-sm">${formatMoney(s.net, p.id)}</p>
                                        </div>
                                    `;
                                }).join('')}
                            </div>

                            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase">أرصدة الشركاء في الكيان</h4>
                            <div class="grid grid-cols-1 gap-2">
                                ${state.partners.slice(0, 2).map(p => { // Assuming first two are dual partners for demo
                                    const bal = calculatePartnerBalance(p.id, 'dual');
                                    return `
                                        <div class="flex justify-between items-center p-3 border rounded shadow-sm">
                                            <span class="text-sm font-semibold">${p.name}</span>
                                            <span class="font-bold ${bal >= 0 ? 'text-green-600' : 'text-red-600'}">${formatMoney(bal)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Triple Entity -->
                    <div class="card !border-t-4 !border-t-purple-500">
                        <div class="card-header flex justify-between items-center">
                            <div>
                                <h3 class="card-title">كيان الثلاثي (المشترك)</h3>
                                <p class="text-[10px] text-gray-500">تمثيل: كافة الشركاء الثلاثة</p>
                            </div>
                            <button onclick="openPartnerTxModal('triple')" class="btn-primary !py-1 !px-2 text-[10px]">إجراء حركة شريك</button>
                        </div>
                        <div class="card-body">
                            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase">مشاريع الكيان</h4>
                            <div class="space-y-2 mb-6">
                                ${tripleProjects.map(p => {
                                    const s = calculateProjectStats(p.id);
                                    return `
                                        <div class="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100 hover:border-purple-200 transition cursor-pointer" onclick="showSection('project', '${p.id}')">
                                            <span class="text-sm font-bold text-slate-700">${p.name}</span>
                                            <p class="font-bold text-purple-600 text-sm">${formatMoney(s.net, p.id)}</p>
                                        </div>
                                    `;
                                }).join('')}
                            </div>

                            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase">أرصدة الشركاء في الكيان</h4>
                            <div class="grid grid-cols-1 gap-2">
                                ${state.partners.map(p => {
                                    const bal = calculatePartnerBalance(p.id, 'triple');
                                    return `
                                        <div class="flex justify-between items-center p-3 border rounded shadow-sm">
                                            <span class="text-sm font-semibold">${p.name}</span>
                                            <span class="font-bold ${bal >= 0 ? 'text-green-600' : 'text-red-600'}">${formatMoney(bal)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            initTreasuryCharts();
        };

        const calculateBankBalanceHistory = (days = 30) => {
            const history = [];
            const today = new Date();
            
            const bankTxs = state.transactions
                .filter(t => t.method === 'bank')
                .sort((a, b) => new Date(a.date) - new Date(b.date));

            for (let i = days - 1; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                
                const balance = bankTxs
                    .filter(t => t.date <= dateStr)
                    .reduce((sum, t) => sum + (t.type === 'in' ? t.amount : -t.amount), 0);
                
                history.push({
                    date: dateStr,
                    label: date.toLocaleDateString('ar-EG', {month: 'numeric', day: 'numeric'}),
                    balance: balance
                });
            }
            return history;
        };

        const initTreasuryCharts = () => {
             const ctx = document.getElementById('bankBalanceChart');
             if (!ctx) return;
             
             const history = calculateBankBalanceHistory(30);
             
             if (window.treasuryChart) window.treasuryChart.destroy();
             window.treasuryChart = new Chart(ctx.getContext('2d'), {
                 type: 'line',
                 data: {
                     labels: history.map(h => h.label),
                     datasets: [{
                         label: 'رصيد البنك الإجمالي',
                         data: history.map(h => h.balance),
                         borderColor: '#2563eb',
                         backgroundColor: 'rgba(37, 99, 235, 0.1)',
                         fill: true,
                         tension: 0.4,
                         pointRadius: 2
                     }]
                 },
                 options: {
                     responsive: true,
                     maintainAspectRatio: false,
                     plugins: {
                         legend: { display: false },
                         tooltip: {
                             titleFont: { family: 'Cairo' },
                             bodyFont: { family: 'Cairo' },
                             callbacks: {
                                 label: (context) => `الرصيد: ${context.parsed.y.toLocaleString()} ج.م`
                             }
                         }
                     },
                     scales: {
                         x: { ticks: { font: { size: 10, family: 'Cairo' } } },
                         y: { beginAtZero: false, ticks: { font: { size: 10, family: 'Cairo' } } }
                     }
                 }
             });
        };

        const openPartnerTxModal = (entityType) => {
            const partners = entityType === 'dual' ? state.partners.slice(0, 2) : state.partners;
            const html = `
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4">إضافة حركة شريك - ${entityType === 'dual' ? 'الكيان الثنائي' : 'الكيان الثلاثي'}</h3>
                    <form onsubmit="savePartnerTransaction(event, '${entityType}')" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1">الشريك</label>
                                <select id="ptx-partner" required class="w-full p-2 border rounded">
                                    ${partners.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1">نوع الحركة</label>
                                <select id="ptx-type" required class="w-full p-2 border rounded">
                                    <option value="in">إيداع / مساهمة</option>
                                    <option value="out">سحب / مصروفات شخصية</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1">المبلغ</label>
                                <input type="number" id="ptx-amount" required step="0.01" class="w-full p-2 border rounded font-bold">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1">التاريخ</label>
                                <input type="date" id="ptx-date" required class="w-full p-2 border rounded" value="${new Date().toISOString().split('T')[0]}">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1">ملاحظات</label>
                            <input type="text" id="ptx-desc" class="w-full p-2 border rounded" placeholder="مثال: سحب تحت الحساب...">
                        </div>
                        <div class="flex justify-end space-x-2 space-x-reverse pt-4">
                            <button type="button" onclick="closeModal()" class="px-4 py-2 text-gray-500 hover:text-gray-700">إلغاء</button>
                            <button type="submit" class="btn-primary">حفظ العملية</button>
                        </div>
                    </form>
                </div>
            `;
            openModal(html);
        };

        const savePartnerTransaction = (e, entityId) => {
            e.preventDefault();
            const newTx = {
                id: 'pt' + Date.now(),
                partnerId: document.getElementById('ptx-partner').value,
                entityId: entityId,
                type: document.getElementById('ptx-type').value,
                amount: parseFloat(document.getElementById('ptx-amount').value),
                date: document.getElementById('ptx-date').value,
                desc: document.getElementById('ptx-desc').value
            };
            state.partnerTransactions.push(newTx);
            saveToLocalStorage();
            closeModal();
            showSection('treasury');
            showToast('تم حفظ حركة الشريك بنجاح');
        };

        const renderProfitDist = (container) => {
            const stats = calculateGlobalStats();
            const companyProfit = stats.net * state.settings.companyShare;
            const investorProfit = stats.net * state.settings.investorShare;
            const eachPartnerShare = companyProfit / state.partners.length;

            container.innerHTML = `
                <div class="card mb-6 overflow-hidden">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-1 p-8 text-center border-b md:border-b-0 md:border-l border-gray-100 bg-slate-50/50">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">إجمالي أرباح المحفظة</p>
                            <h2 class="text-3xl font-extrabold text-slate-800">${formatMoney(stats.net)}</h2>
                        </div>
                        <div class="w-full md:w-64 p-8 text-center bg-blue-600 text-white shadow-inner">
                            <p class="text-[10px] font-bold opacity-70 uppercase mb-1">نصيب الشركة (70%)</p>
                            <h3 class="text-xl font-bold">${formatMoney(companyProfit)}</h3>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">توزيع الشركاء الاستراتيجيين</h3>
                            <span class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-bold">بالتساوي</span>
                        </div>
                        <div class="card-body p-0">
                            ${state.partners.map(p => `
                                <div class="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-slate-50 transition">
                                    <div class="flex items-center gap-3">
                                        <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span class="text-sm font-bold text-slate-700">${p.name}</span>
                                    </div>
                                    <span class="font-bold text-blue-600 text-sm">${formatMoney(eachPartnerShare)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="card bg-green-50/30 border-green-100">
                        <div class="card-header border-green-100">
                            <h3 class="card-title text-green-800">حصة الممول الخارجي (30%)</h3>
                            <i data-lucide="user-check" class="w-4 h-4 text-green-600"></i>
                        </div>
                        <div class="card-body flex flex-col items-center justify-center py-10">
                            <p class="text-xs text-green-600 font-bold mb-2 uppercase">المستحق للصرف</p>
                            <p class="text-3xl font-extrabold text-green-700">${formatMoney(investorProfit)}</p>
                            <div class="mt-6 px-4 py-2 bg-green-100 text-green-800 rounded-lg text-xs font-semibold">
                                جاهز للتسوية المالية
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const renderSettings = (container) => {
            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Notifications & Currency -->
                    <div class="card p-6">
                        <h3 class="font-bold text-lg mb-6 flex items-center gap-2"><i data-lucide="bell-ring" class="w-5 h-5 text-red-500"></i>نظام التنبيهات والعملة الافتراضية</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-3 border rounded bg-slate-50">
                                <div>
                                    <p class="text-sm font-bold">تفعيل تنبيهات الرصيد المنخفض</p>
                                    <p class="text-[10px] text-gray-500">إرسال إشعار عند انخفاض رصيد المشروع عن الحد الأدنى</p>
                                </div>
                                <input type="checkbox" id="set-alert-enabled" ${state.settings.alertEnabled ? 'checked' : ''} class="w-5 h-5">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1">الحد الأدنى للتنبيه (${state.settings.defaultCurrency})</label>
                                <input type="number" id="set-alert-threshold" value="${state.settings.alertThreshold}" class="w-full p-2 border rounded">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">العملة الافتراضية للنظام</label>
                                <input type="text" id="set-default-currency" value="${state.settings.defaultCurrency}" class="w-full p-2 border rounded font-bold text-center" placeholder="مثال: ج.م">
                            </div>
                        </div>
                    </div>

                    <!-- Project Management -->
                    <div class="card p-6">
                        <h3 class="font-bold text-lg mb-6 flex items-center gap-2"><i data-lucide="layers" class="w-5 h-5 text-indigo-500"></i>إدارة المشاريع</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-3 border rounded bg-indigo-50/50 border-indigo-100">
                                <div>
                                    <p class="text-sm font-bold text-indigo-900">تصفية القائمة</p>
                                    <p class="text-[10px] text-indigo-600">تغيير عرض القائمة الجانبية وقائمة الإعدادات</p>
                                </div>
                                <select id="settings-project-filter" onchange="updateProjectFilter(this.value)" class="text-xs p-2 border border-indigo-200 rounded bg-white font-bold outline-none ring-indigo-50 focus:ring-4">
                                    <option value="active" ${state.settings.projectFilter === 'active' ? 'selected' : ''}>المشاريع النشطة فقط</option>
                                    <option value="archived" ${state.settings.projectFilter === 'archived' ? 'selected' : ''}>المشاريع المؤرشفة فقط</option>
                                    <option value="all" ${state.settings.projectFilter === 'all' ? 'selected' : ''}>عرض كافة المشاريع</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-semibold mb-2 text-slate-600">إدارة تفاصيل المشاريع (العملة والوصف)</label>
                                <div class="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar border rounded-lg p-3 bg-slate-50/30">
                                    ${state.projects.filter(p => state.settings.projectFilter === 'all' || p.status === state.settings.projectFilter).map(p => `
                                        <div class="flex flex-col gap-2 p-3 bg-white border border-slate-100 rounded-lg hover:shadow-sm transition">
                                            <div class="flex items-center gap-2">
                                                <div class="w-2 h-2 rounded-full ${p.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}"></div>
                                                <span class="text-xs flex-1 truncate font-bold text-slate-700">${p.name}</span>
                                                <div class="flex items-center gap-1 bg-slate-100 p-1 rounded border">
                                                    <select data-pid="${p.id}" class="project-icon-select bg-transparent text-[10px] outline-none cursor-pointer font-bold">
                                                        ${PROJECT_ICONS.map(i => `<option value="${i.icon}" ${p.icon === i.icon ? 'selected' : ''}>${i.name}</option>`).join('')}
                                                    </select>
                                                    <i data-lucide="${p.icon || 'building-2'}" class="w-3 h-3 text-blue-600"></i>
                                                </div>
                                                <input type="text" data-pid="${p.id}" value="${p.currency}" class="project-currency-input w-16 p-1 text-center border rounded text-[10px] font-bold" placeholder="العملة">
                                            </div>
                                            <input type="text" data-pid="${p.id}" value="${p.description || ''}" class="project-desc-input w-full p-1.5 border rounded text-[10px]" placeholder="أضف وصفاً مختصراً للمشروع هنا...">
                                        </div>
                                    `).join('')}
                                    ${state.projects.filter(p => state.settings.projectFilter === 'all' || p.status === state.settings.projectFilter).length === 0 ? '<p class="text-center py-4 text-xs text-gray-400 italic">لا توجد مشاريع مطابقة للفلتر</p>' : ''}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Company Info -->
                    <div class="card p-6">
                        <h3 class="font-bold text-lg mb-6 flex items-center gap-2"><i data-lucide="briefcase" class="w-5 h-5 text-green-500"></i>بيانات الشركة</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-semibold mb-2">اسم المنشأة / الشركة</label>
                                <input type="text" id="set-company-name" value="${state.settings.companyName}" class="w-full p-2 border rounded font-bold">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-semibold mb-2">نسبة الضرائب (%)</label>
                                    <input type="number" id="set-tax-rate" value="${state.settings.taxRate}" class="w-full p-2 border rounded">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold mb-2">نسبة الممول (0-1)</label>
                                    <input type="number" id="set-inv-share" step="0.01" value="${state.settings.investorShare}" class="w-full p-2 border rounded font-bold">
                                </div>
                            </div>
                            <button onclick="updateSettings()" class="btn-primary w-full mt-4 flex items-center justify-center gap-2 shadow-lg shadow-blue-200"><i data-lucide="save" class="w-4 h-4"></i> حفظ التغييرات</button>
                        </div>
                    </div>
                    
                    <!-- Data Management -->
                    <div class="card p-6 lg:col-span-1">
                         <h3 class="font-bold text-lg mb-6 flex items-center gap-2"><i data-lucide="database" class="w-5 h-5 text-blue-500"></i>إدارة البيانات</h3>
                         <div class="grid grid-cols-1 gap-3">
                            <button onclick="backupData()" class="w-full py-3 px-4 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-900 transition">
                                <i data-lucide="download" class="ml-2 w-4 h-4"></i>نسخة احتياطية (JSON)
                            </button>
                            <label class="w-full py-3 px-4 bg-white text-slate-700 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50 cursor-pointer text-center transition">
                                <i data-lucide="upload" class="ml-2 w-4 h-4"></i>استرجاع النسخة
                                <input type="file" id="import-file" class="hidden" onchange="importData(this)">
                            </label>
                            <button onclick="resetData()" class="w-full py-3 px-4 text-red-600 border border-red-100 rounded-lg flex items-center justify-center hover:bg-red-50 transition">
                                <i data-lucide="trash-2" class="ml-2 w-4 h-4"></i>حذف كافة البيانات
                            </button>
                         </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const renderExtracts = (container) => {
            container.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="stat-card income">
                        <p class="stat-label">إجمالي المستخلصات</p>
                        <p class="stat-value">${formatMoney(state.extracts.reduce((sum, e) => sum + e.amount, 0))}</p>
                    </div>
                    <div class="stat-card expense">
                        <p class="stat-label">إجمالي الضرائب (1.5%)</p>
                        <p class="stat-value text-red-600">${formatMoney(state.extracts.reduce((sum, e) => sum + e.tax, 0))}</p>
                    </div>
                    <div class="stat-card profit">
                        <p class="stat-label">صافي المحصل</p>
                        <p class="stat-value text-green-600">${formatMoney(state.extracts.filter(e => e.status === 'received').reduce((sum, e) => sum + e.net, 0))}</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">قائمة المستخلصات</h3>
                        <button onclick="showToast('جاري التحميل...', 'info')" class="btn-primary !p-2 text-xs">إضافة مستخلص</button>
                    </div>
                    <div class="card-body">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>المشروع</th>
                                    <th>رقم</th>
                                    <th>التاريخ</th>
                                    <th>القيمة الإجمالية</th>
                                    <th>الضرائب</th>
                                    <th>الصافي</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${state.extracts.map(e => {
                                    const p = state.projects.find(pj => pj.id === e.projectId);
                                    return `
                                        <tr>
                                            <td class="font-bold">${p ? p.name : '--'}</td>
                                            <td>${e.number}</td>
                                            <td>${formatDate(e.date)}</td>
                                            <td class="font-bold text-blue-600">${formatMoney(e.amount)}</td>
                                            <td class="text-red-500 font-mono">${formatMoney(e.tax)}</td>
                                            <td class="font-black text-slate-800">${formatMoney(e.net)}</td>
                                            <td>
                                                <span class="badge ${e.status === 'received' ? 'badge-success' : 'badge-danger'}">
                                                    ${e.status === 'received' ? 'مستلم' : 'معلق'}
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const renderInvoices = (container) => {
            container.innerHTML = `
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h3 class="text-lg font-bold">الفواتير</h3>
                        <p class="text-[10px] text-gray-500">إجمالي الفواتير والمدفوعات المتأخرة</p>
                    </div>
                    <button class="btn-primary flex items-center gap-2"><i data-lucide="plus" class="w-4 h-4"></i> فاتورة جديدة</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    ${state.invoices.map(inv => `
                        <div class="card p-4 border-r-4 ${inv.status === 'paid' ? 'border-r-green-500' : 'border-r-amber-500'}">
                            <div class="flex justify-between mb-2">
                                <span class="text-[10px] font-bold text-gray-400">${inv.number}</span>
                                <span class="badge ${inv.status === 'paid' ? 'badge-success' : 'badge-danger'}">${inv.status === 'paid' ? 'مدفوعة' : 'مسودة'}</span>
                            </div>
                            <h4 class="font-bold text-slate-800 mb-1 truncate">${inv.client}</h4>
                            <p class="text-xl font-black text-blue-600 mb-2">${formatMoney(inv.amount)}</p>
                            <div class="flex items-center gap-1 text-[10px] text-gray-400">
                                <i data-lucide="calendar" class="w-3 h-3"></i>
                                <span>تاريخ: ${formatDate(inv.date)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            lucide.createIcons();
        };

        const renderTenders = (container) => {
            container.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">المناقصات المفتوحة والمغلقة</h3>
                        <div class="flex gap-2">
                            <div class="text-right border-l pl-4">
                                <p class="text-[9px] font-bold text-gray-400 uppercase">معدل الفوز</p>
                                <p class="text-sm font-bold text-blue-600 text-center">50%</p>
                            </div>
                            <button class="btn-primary !p-2 text-xs">إضافة عطاء</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>اسم العطاء</th>
                                    <th>التاريخ</th>
                                    <th>القيمة التقديرية</th>
                                    <th>هامش الربح %</th>
                                    <th>الحالة</th>
                                    <th>إجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${state.tenders.map(t => `
                                    <tr>
                                        <td class="font-bold">${t.name}</td>
                                        <td>${formatDate(t.date)}</td>
                                        <td class="font-bold text-blue-700">${formatMoney(t.amount)}</td>
                                        <td class="font-mono text-indigo-600 text-center">%${t.margin}</td>
                                        <td>
                                            <span class="badge ${t.status === 'won' ? 'badge-success' : t.status === 'lost' ? 'badge-danger' : 'bg-slate-100 text-slate-500'}">
                                                ${t.status === 'won' ? 'رابح' : t.status === 'lost' ? 'خاسر' : 'معلق'}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="text-blue-500 hover:underline text-[10px] font-bold">تحويل لمشروع</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const renderInventory = (container) => {
            container.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    ${state.inventory.map(item => {
                        const status = item.quantity === 0 ? 'نفد' : (item.quantity <= item.minQuantity ? 'منخفض' : 'كافي');
                        const statusColor = item.quantity === 0 ? 'text-red-600 bg-red-50' : (item.quantity <= item.minQuantity ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50');
                        return `
                            <div class="card p-5 relative overflow-hidden">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 class="font-black text-slate-800 text-lg">${item.name}</h4>
                                        <p class="text-xs text-gray-400">الوحدة: ${item.unit} | السعر: ${formatMoney(item.price)}</p>
                                    </div>
                                    <span class="px-3 py-1 rounded-full text-[10px] font-bold ${statusColor}">${status}</span>
                                </div>
                                <div class="flex items-end justify-between">
                                    <div>
                                        <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">الكمية المتوفرة</p>
                                        <p class="text-3xl font-black text-slate-700">${item.quantity}</p>
                                    </div>
                                    <div class="flex gap-1">
                                        <button class="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"><i data-lucide="plus" class="w-4 h-4"></i></button>
                                        <button class="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100"><i data-lucide="minus" class="w-4 h-4"></i></button>
                                    </div>
                                </div>
                                <div class="mt-4 bg-slate-100 h-1 rounded-full">
                                    <div class="bg-blue-600 h-full rounded-full" style="width: ${Math.min(100, (item.quantity / (item.minQuantity * 2)) * 100)}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            lucide.createIcons();
        };

        const renderArchive = (container) => {
            container.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">أرشيف المستندات</h3>
                        <button class="btn-primary flex items-center gap-2"><i data-lucide="upload-cloud" class="w-4 h-4"></i> رفع مستند</button>
                    </div>
                    <div class="card-body">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>اسم المستند</th>
                                    <th>النوع</th>
                                    <th>مرتبط بمشروع</th>
                                    <th>تاريخ الانتهاء</th>
                                    <th>الحالة</th>
                                    <th>إجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${state.archive.map(doc => `
                                    <tr>
                                        <td class="font-bold">${doc.name}</td>
                                        <td><span class="text-[10px] px-2 py-0.5 bg-slate-100 rounded">${doc.type}</span></td>
                                        <td>${doc.projectId ? (state.projects.find(p => p.id === doc.projectId)?.name || '--') : 'عام'}</td>
                                        <td>${doc.expiry ? formatDate(doc.expiry) : '--'}</td>
                                        <td>
                                            <span class="badge ${doc.status === 'valid' ? 'badge-success' : 'badge-danger'}">
                                                ${doc.status === 'valid' ? 'ساري' : 'منتهي'}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="p-1 text-blue-600 hover:bg-blue-50 rounded"><i data-lucide="eye" class="w-4 h-4"></i></button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const renderUsers = (container) => {
            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 space-y-6">
                        <div class="card">
                            <div class="card-header border-b">
                                <h3 class="card-title">المستخدمين والنظام</h3>
                                <button class="btn-primary !py-1 !px-3 text-xs">إضافة مستخدم</button>
                            </div>
                            <div class="card-body p-0">
                                <table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>الاسم</th>
                                            <th>اسم المستخدم</th>
                                            <th>الدور</th>
                                            <th>آخر نشاط</th>
                                            <th>الإجراء</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${state.users.map(u => `
                                            <tr>
                                                <td class="font-bold">${u.name}</td>
                                                <td class="font-mono text-xs">${u.username}</td>
                                                <td><span class="badge ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-600'}">${u.role}</span></td>
                                                <td class="text-[10px] text-gray-400">منذ 5 دقائق</td>
                                                <td>
                                                    <button class="text-blue-500 hover:underline text-xs">تعديل</button>
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-header border-b">
                                <h3 class="card-title">سجل النشاط (Audit Log)</h3>
                            </div>
                            <div class="card-body p-0 max-h-[400px] overflow-y-auto no-scrollbar">
                                <table class="data-table">
                                    <tbody>
                                        ${state.activityLog.length === 0 ? '<tr><td class="text-center py-8 text-gray-400 italic">لا توجد سجلات نشاط متاحة</td></tr>' : ''}
                                        ${state.activityLog.map(log => `
                                            <tr>
                                                <td class="w-10">
                                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">${log.user[0]}</div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-bold text-slate-700">${log.action}</p>
                                                    <p class="text-[10px] text-gray-400">${log.details}</p>
                                                </td>
                                                <td class="text-[9px] text-gray-400 text-left">${new Date(log.time).toLocaleTimeString('ar-EG')}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="card p-6 bg-slate-900 text-white">
                            <h4 class="font-bold mb-4 flex items-center gap-2"><i data-lucide="shield-check" class="w-5 h-5 text-blue-400"></i> ملخص الصلاحيات</h4>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                                    <span>المدير العام</span>
                                    <span class="text-green-400">وصول كامل</span>
                                </div>
                                <div class="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                                    <span>المحاسب</span>
                                    <span class="text-blue-300">مالي فقط</span>
                                </div>
                                <div class="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                                    <span>مهندس الموقع</span>
                                    <span class="text-amber-300">موقع محدد</span>
                                </div>
                                <div class="flex justify-between items-center text-xs">
                                    <span>الشريك</span>
                                    <span class="text-gray-400">عرض الأرباح</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        const downloadExcelTemplate = () => {
            const data = [
                ["التاريخ", "البيان", "النوع (in/out)", "التصنيف", "المبلغ", "طريقة الدفع (cash/bank/cc)"],
                ["2026-05-01", "مثال: دفعة تحت الحساب", "in", "وارد مستخلص", 100000, "bank"],
                ["2026-05-02", "مثال: شراء كابلات", "out", "مواد خام", 5000, "cash"]
            ];
            const ws = XLSX.utils.aoa_to_sheet(data);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "شيت الرفع");
            XLSX.writeFile(wb, "template_import.xlsx");
        };

        const renderReports = (container) => {
            // Simplified P&L Summary for Analytics
            const totalIn = state.transactions.filter(t => t.type === 'in').reduce((s, t) => s + t.amount, 0);
            const totalOut = state.transactions.filter(t => t.type === 'out').reduce((s, t) => s + t.amount, 0);
            const net = totalIn - totalOut;

            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card p-6">
                        <h3 class="font-bold mb-4 border-b pb-2">قائمة الدخل التقديرية (P&L)</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500">إجمالي الإيرادات</span>
                                <span class="font-bold text-green-600">${formatMoney(totalIn)}</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500">إجمالي المصروفات التشغيلية</span>
                                <span class="font-bold text-red-600">${formatMoney(totalOut)}</span>
                            </div>
                            <div class="pt-2 border-t flex justify-between items-center font-black">
                                <span>صافي الربح التشغيلي</span>
                                <span class="${net >= 0 ? 'text-blue-700' : 'text-red-700'}">${formatMoney(net)}</span>
                            </div>
                            <p class="text-[10px] text-gray-400 mt-4 leading-relaxed">بناءً على المعاملات المسجلة في كافة المشاريع النشطة والمؤرشفة حالياً.</p>
                        </div>
                    </div>
                    
                    <div class="card p-6">
                        <h3 class="font-bold mb-4 border-b pb-2">أدوات إضافية</h3>
                        <div class="space-y-3">
                            <button onclick="downloadExcelTemplate()" class="w-full p-3 bg-slate-50 border rounded-lg text-xs font-bold text-slate-700 flex items-center justify-between hover:bg-slate-100 transition">
                                <span>تحميل نموذج رفع الإكسيل (Import Template)</span>
                                <i data-lucide="download" class="w-4 h-4"></i>
                            </button>
                            <button onclick="window.print()" class="w-full p-3 bg-slate-50 border rounded-lg text-xs font-bold text-slate-700 flex items-center justify-between hover:bg-slate-100 transition">
                                <span>طباعة كشف مجمع للمركز المالي</span>
                                <i data-lucide="printer" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        };

        // --- Modals ---
        const openAddProjectModal = () => {
            const html = `
                <div class="p-6">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <i data-lucide="plus" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-extrabold text-slate-800">إضافة مشروع جديد</h3>
                            <p class="text-xs text-gray-500">أدخل بيانات المشروع الأساسية للبدء في تتبع ماليته</p>
                        </div>
                    </div>
                    <form id="project-form" onsubmit="saveProject(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-slate-700">اسم المشروع</label>
                            <input type="text" id="p-name" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="مثال: مشروع مجمع زايد السكني">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-slate-700">وصف قصير للمشروع</label>
                            <input type="text" id="p-desc" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="اختياري: وصف مختصر للعمل أو الموقع">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-slate-700">العملة</label>
                                <input type="text" id="p-currency" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" value="${state.settings.defaultCurrency || 'ج.م'}">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-slate-700">أيقونة المشروع</label>
                                <select id="p-icon" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition bg-white">
                                    ${PROJECT_ICONS.map(i => `<option value="${i.icon}">${i.name}</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-slate-700">نوع الكيان</label>
                            <select id="p-type" required class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition bg-white">
                                <option value="investment">استثماري (طبيعي)</option>
                                <option value="dual">كيان ثنائي (مشترك)</option>
                                <option value="triple">كيان ثلاثي (خزينة مشتركة)</option>
                            </select>
                        </div>
                        <div class="flex justify-end space-x-2 space-x-reverse pt-6">
                            <button type="button" onclick="closeModal()" class="px-5 py-2.5 text-gray-400 hover:text-gray-600 font-bold transition">إلغاء</button>
                            <button type="submit" class="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">إنشاء المشروع</button>
                        </div>
                    </form>
                </div>
            `;
            openModal(html);
        };

        const saveProject = (e) => {
            e.preventDefault();
            const name = document.getElementById('p-name').value;
            const description = document.getElementById('p-desc').value;
            const currency = document.getElementById('p-currency').value;
            const type = document.getElementById('p-type').value;
            const icon = document.getElementById('p-icon').value;

            const newProject = {
                id: 'p' + Date.now(),
                name,
                description,
                currency,
                type,
                icon,
                status: 'active'
            };

            state.projects.push(newProject);
            saveToLocalStorage();
            closeModal();
            renderSidebarProjects();
            showSection('project', newProject.id);
            showToast('تم إنشاء المشروع الجديد بنجاح');
        };

        const openAddTransactionModal = (pid) => {
            const user = state.currentUser;
            if (user.role === 'partner') {
                showToast('الشركاء لا يملكون صلاحية إضافة معاملات', 'error');
                return;
            }
            
            const project = state.projects.find(p => p.id === pid);
            const html = `
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4">إضافة حركة جديدة - ${project.name}</h3>
                    <form id="tx-form" onsubmit="saveTransaction(event, '${pid}')" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1">التاريخ</label>
                                <input type="date" id="tx-date" required class="w-full p-2 border rounded" value="${new Date().toISOString().split('T')[0]}">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1">النوع</label>
                                <select id="tx-type" required class="w-full p-2 border rounded" ${user.role === 'engineer' ? 'disabled' : ''}>
                                    <option value="out" ${user.role === 'engineer' ? 'selected' : ''}>صادر (مصروفات)</option>
                                    ${user.role !== 'engineer' ? '<option value="in">وارد (إيرادات)</option>' : ''}
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-1">الفئة</label>
                                <select id="tx-category" required class="w-full p-2 border rounded">
                                    ${user.role === 'engineer' ? `
                                        <option>مواد خام</option>
                                        <option>عمالة</option>
                                        <option>مواصلات</option>
                                        <option>سلف</option>
                                        <option>أخرى</option>
                                    ` : `
                                        <option>مواد خام</option>
                                        <option>عمالة</option>
                                        <option>مواصلات</option>
                                        <option>ضرائب</option>
                                        <option>وارد مستخلص</option>
                                        <option>سلف</option>
                                        <option>أخرى</option>
                                    `}
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1">طريقة الدفع / التحصيل</label>
                                <select id="tx-method" required class="w-full p-2 border rounded bg-slate-50 font-bold" ${user.role === 'engineer' ? 'disabled' : ''}>
                                    <option value="cash" selected>كاش (نقدي)</option>
                                    ${user.role !== 'engineer' ? `
                                        <option value="bank">تحويل بنكي</option>
                                        <option value="cc">بطاقة ائتمان (فيزا)</option>
                                    ` : ''}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1">المبلغ (${project.currency || state.settings.defaultCurrency || 'ج.م'})</label>
                            <input type="number" id="tx-amount" required step="0.01" class="w-full p-2 border rounded font-bold text-lg text-blue-600">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1">البيان / ملاحظات</label>
                            <textarea id="tx-desc" rows="3" class="w-full p-2 border rounded" placeholder="مثال: فاتورة توريد مواسير شهر مايو..."></textarea>
                        </div>
                        <div class="flex justify-end space-x-2 space-x-reverse pt-4">
                            <button type="button" onclick="closeModal()" class="px-4 py-2 text-gray-500 hover:text-gray-700">إلغاء</button>
                            <button type="submit" class="btn-primary">حفظ العملية</button>
                        </div>
                    </form>
                </div>
            `;
            openModal(html);
        };

        const saveTransaction = (e, pid) => {
            e.preventDefault();
            const newTx = {
                id: 't' + Date.now(),
                projectId: pid,
                date: document.getElementById('tx-date').value,
                type: document.getElementById('tx-type').value,
                category: document.getElementById('tx-category').value,
                method: document.getElementById('tx-method').value,
                amount: parseFloat(document.getElementById('tx-amount').value),
                desc: document.getElementById('tx-desc').value
            };
            state.transactions.push(newTx);
            saveToLocalStorage();
            closeModal();
            showToast('تم حفظ العملية بنجاح');
            renderProjectView(document.getElementById('content-area'), pid);
            renderSidebarProjects();
            checkProjectAlerts(true);
        };

        const deleteTransaction = (tid, pid) => {
            const role = state.currentUser.role;
            if (role === 'partner' || role === 'engineer') {
                showToast('لا تملك صلاحية حذف المعاملات', 'error');
                return;
            }
            if (confirm('هل أنت متأكد من رغبتك في حذف هذه العملية؟')) {
                state.transactions = state.transactions.filter(t => t.id !== tid);
                saveToLocalStorage();
                showToast('تم حذف العملية');
                renderProjectView(document.getElementById('content-area'), pid);
                checkProjectAlerts(true);
            }
        };

        // --- Data Calculations ---
        const alertedProjects = new Set(); // Track projects already alerted in this session

        const calculateProjectStats = (pid) => {
            const txs = state.transactions.filter(t => t.projectId === pid);
            const totalIn = txs.filter(t => t.type === 'in').reduce((sum, t) => sum + t.amount, 0);
            const totalOut = txs.filter(t => t.type === 'out').reduce((sum, t) => sum + t.amount, 0);
            const net = totalIn - totalOut;
            
            // Cash Position Breakdown
            const cashBalance = txs.filter(t => t.method === 'cash').reduce((sum, t) => sum + (t.type === 'in' ? t.amount : -t.amount), 0);
            const bankBalance = txs.filter(t => t.method === 'bank').reduce((sum, t) => sum + (t.type === 'in' ? t.amount : -t.amount), 0);
            const ccBalance = txs.filter(t => t.method === 'cc').reduce((sum, t) => sum + (t.type === 'in' ? t.amount : -t.amount), 0);

            // Partner Distribution
            const investorProfit = Math.max(0, net * (state.settings.investorShare || 0.3));
            const companyProfit = Math.max(0, net * (state.settings.companyShare || 0.7));

            // Check for deficit status for UI (sidebar indicator)
            const hasDeficit = net < 0;

            return { totalIn, totalOut, net, hasDeficit, cashBalance, bankBalance, ccBalance, investorProfit, companyProfit };
        };

        const checkProjectAlerts = (force = false) => {
            if (!state.settings.alertEnabled) return;
            
            state.projects.forEach(p => {
                const stats = calculateProjectStats(p.id);
                const threshold = state.settings.alertThreshold || 0;
                
                // Alert if below threshold, positive (not deficit yet), and not already alerted
                if (stats.net < threshold && stats.net > 0) {
                    if (force || !alertedProjects.has(p.id)) {
                        alertedProjects.add(p.id);
                        setTimeout(() => {
                            const toastMsg = `تنبيه: رصيد مشروع "${p.name}" وصل إلى الحد الأدنى (${formatMoney(stats.net, p.id)})`;
                            showToast(toastMsg, 'warning');
                        }, 800);
                    }
                } else if (stats.net >= threshold) {
                    // Reset alert flag if balance recovered
                    alertedProjects.delete(p.id);
                }
            });
        };

        const calculateGlobalStats = () => {
            const totalIn = state.transactions.filter(t => t.type === 'in').reduce((sum, t) => sum + t.amount, 0);
            const totalOut = state.transactions.filter(t => t.type === 'out').reduce((sum, t) => sum + t.amount, 0);
            return { totalIn, totalOut, net: totalIn - totalOut };
        };

        const calculateSalary = (empId, baseSalary, month) => {
            const data = state.payroll[month]?.[empId] || { attendance: Array(30).fill(1), overtime: 0, bonus: 0, advance: 0 };
            const workedDays = (data.attendance || Array(30).fill(1)).filter(d => d === 1).length;
            const dailyWage = baseSalary / 26;
            const attendancePay = workedDays * dailyWage;
            const overtimePay = (data.overtime || 0) * (dailyWage / 8);
            const total = attendancePay + overtimePay + (data.bonus || 0) - (data.advance || 0);
            return total;
        };

        const handleGlobalSearch = (query) => {
            if (!query || query.length < 2) return;
            
            const results = {
                projects: state.projects.filter(p => (p.name.includes(query) || (p.description && p.description.includes(query))) && canAccess('project', p.id)),
                transactions: state.transactions.filter(t => ((t.desc && t.desc.includes(query)) || t.category.includes(query)) && canAccess('project', t.projectId)).slice(0, 10),
                employees: state.employees.filter(e => (e.name.includes(query) || e.job.includes(query)) && canAccess('payroll'))
            };
            
            showSearchResults(results);
        };

        const showSearchResults = (results) => {
            const hasResults = results.projects.length || results.transactions.length || results.employees.length;
            
            const html = `
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                        <i data-lucide="search" class="w-5 h-5 text-blue-600"></i>
                        نتائج البحث
                    </h3>
                    <div class="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                        ${results.projects.length ? `
                            <div>
                                <h4 class="text-xs font-bold text-gray-400 uppercase mb-2">المشاريع</h4>
                                <div class="grid grid-cols-1 gap-2">
                                    ${results.projects.map(p => `
                                        <button onclick="showSection('project', '${p.id}')" class="flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200">
                                            <span class="text-sm font-bold text-slate-700">${p.name}</span>
                                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">${p.type}</span>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${results.transactions.length ? `
                            <div>
                                <h4 class="text-xs font-bold text-gray-400 uppercase mb-2">آخر المعاملات المتطابقة</h4>
                                <div class="space-y-2">
                                    ${results.transactions.map(t => {
                                        const p = state.projects.find(pj => pj.id === t.projectId);
                                        return `
                                            <div class="flex items-center justify-between p-3 border rounded-lg bg-white">
                                                <div>
                                                    <p class="text-sm font-bold text-slate-700">${t.desc || t.category}</p>
                                                    <p class="text-[10px] text-gray-400">${p ? p.name : ''} | ${formatDate(t.date)}</p>
                                                </div>
                                                <div class="text-left">
                                                    <p class="text-sm font-black ${t.type === 'in' ? 'text-green-600' : 'text-red-600'}">${formatMoney(t.amount, t.projectId)}</p>
                                                    <span class="text-[9px] uppercase font-bold">${t.method}</span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}

                        ${results.employees.length ? `
                            <div>
                                <h4 class="text-xs font-bold text-gray-400 uppercase mb-2">الموظفين</h4>
                                <div class="grid grid-cols-1 gap-2">
                                    ${results.employees.map(e => `
                                        <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">${e.name[0]}</div>
                                            <div>
                                                <p class="text-sm font-bold text-slate-700">${e.name}</p>
                                                <p class="text-[10px] text-gray-400">${e.job} | ${e.site}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}

                        ${!hasResults ? '<p class="text-center py-8 text-gray-400 italic">لا توجد نتائج مطابقة لبحثك</p>' : ''}
                    </div>
                </div>
            `;
            openModal(html);
        };

        // --- Charts Initialization ---
        const initDashboardCharts = () => {
            const canvas = document.getElementById('projectsChart');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            
            // Limit to active projects for dashboard chart to avoid clutter
            const chartProjects = state.projects.filter(p => p.status === 'active');
            const projectData = chartProjects.map(p => {
                const s = calculateProjectStats(p.id);
                return { name: p.name.length > 20 ? p.name.substring(0, 18) + '..' : p.name, in: s.totalIn, out: s.totalOut };
            });

            if (window.myChart) window.myChart.destroy();
            window.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: projectData.map(d => d.name),
                    datasets: [
                        { label: 'الإيرادات', data: projectData.map(d => d.in), backgroundColor: 'rgba(37, 99, 235, 0.7)' },
                        { label: 'المصروفات', data: projectData.map(d => d.out), backgroundColor: 'rgba(220, 38, 38, 0.7)' }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y', // Better for long Arabic labels
                    plugins: { 
                        legend: { position: 'bottom', labels: { font: { family: 'Cairo', size: 10 } } },
                        tooltip: { titleFont: { family: 'Cairo' }, bodyFont: { family: 'Cairo' } }
                    },
                    scales: { 
                        x: { beginAtZero: true, ticks: { font: { family: 'Cairo', size: 10 } } },
                        y: { ticks: { font: { family: 'Cairo', size: 10 } } }
                    }
                }
            });
        };

        // --- Sidebar Management ---
        // --- Side Nav Logic ---
        const renderSidebarNav = () => {
            const nav = document.getElementById('sidebar-nav');
            const user = state.currentUser;
            if (!user) return;

            let html = '';
            
            if (canAccess('dashboard')) {
                html += `
                    <a href="#" onclick="showSection('dashboard')" data-section="dashboard" class="nav-item ${currentSection === 'dashboard' ? 'active' : ''}">
                        <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                        <span>لوحة التحكم</span>
                    </a>
                `;
            }

            html += `
                <div class="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span>المشاريع</span>
                        ${user.role === 'admin' || user.role === 'accountant' ? `
                        <button onclick="openAddProjectModal()" class="hover:text-blue-400 transition" title="إضافة مشروع جديد">
                            <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i>
                        </button>` : ''}
                    </div>
                    ${user.role !== 'engineer' ? `
                    <select id="sidebar-status-filter" onchange="updateProjectFilter(this.value)" class="bg-transparent text-[10px] border-none focus:ring-0 cursor-pointer text-gray-400 hover:text-white transition outline-none">
                        <option value="active" class="bg-[#1a2340]" ${state.settings.projectFilter === 'active' ? 'selected' : ''}>نشط</option>
                        <option value="archived" class="bg-[#1a2340]" ${state.settings.projectFilter === 'archived' ? 'selected' : ''}>مؤرشف</option>
                        <option value="all" class="bg-[#1a2340]" ${state.settings.projectFilter === 'all' ? 'selected' : ''}>الكل</option>
                    </select>` : ''}
                </div>
                <div id="sidebar-projects-list">
                    <!-- Projects will be injected here -->
                </div>
            `;

            if (canAccess('treasury') || canAccess('profit-dist')) {
                html += `<div class="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">المالية</div>`;
                if (canAccess('treasury')) {
                    html += `
                        <a href="#" onclick="showSection('treasury')" data-section="treasury" class="nav-item ${currentSection === 'treasury' ? 'active' : ''}">
                            <i data-lucide="banknote" class="w-4 h-4"></i>
                            <span>الخزينة</span>
                        </a>
                    `;
                }
                html += `
                    <a href="#" onclick="showSection('extracts')" data-section="extracts" class="nav-item ${currentSection === 'extracts' ? 'active' : ''}">
                        <i data-lucide="file-check" class="w-4 h-4"></i>
                        <span>المستخلصات</span>
                    </a>
                    <a href="#" onclick="showSection('invoices')" data-section="invoices" class="nav-item ${currentSection === 'invoices' ? 'active' : ''}">
                        <i data-lucide="receipt" class="w-4 h-4"></i>
                        <span>الفواتير</span>
                    </a>
                `;
                if (canAccess('profit-dist')) {
                    html += `
                        <a href="#" onclick="showSection('profit-dist')" data-section="profit-dist" class="nav-item ${currentSection === 'profit-dist' ? 'active' : ''}">
                            <i data-lucide="pie-chart" class="w-4 h-4"></i>
                            <span>توزيع الأرباح</span>
                        </a>
                    `;
                }
            }

            if (canAccess('payroll') || canAccess('reports') || canAccess('settings')) {
                html += `<div class="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">الإدارة التشغيلية</div>`;
                html += `
                    <a href="#" onclick="showSection('tenders')" data-section="tenders" class="nav-item ${currentSection === 'tenders' ? 'active' : ''}">
                        <i data-lucide="gavel" class="w-4 h-4"></i>
                        <span>العطاءات</span>
                    </a>
                    <a href="#" onclick="showSection('inventory')" data-section="inventory" class="nav-item ${currentSection === 'inventory' ? 'active' : ''}">
                        <i data-lucide="package" class="w-4 h-4"></i>
                        <span>المخزون</span>
                    </a>
                `;
                if (canAccess('payroll')) {
                    html += `
                        <a href="#" onclick="showSection('payroll')" data-section="payroll" class="nav-item ${currentSection === 'payroll' ? 'active' : ''}">
                            <i data-lucide="users" class="w-4 h-4"></i>
                            <span>الرواتب والحضور</span>
                        </a>
                    `;
                }
                html += `
                    <a href="#" onclick="showSection('archive')" data-section="archive" class="nav-item ${currentSection === 'archive' ? 'active' : ''}">
                        <i data-lucide="archive" class="w-4 h-4"></i>
                        <span>الأرشيف</span>
                    </a>
                `;
                if (user.role === 'admin') {
                   html += `
                        <a href="#" onclick="showSection('users')" data-section="users" class="nav-item ${currentSection === 'users' ? 'active' : ''}">
                            <i data-lucide="shield-check" class="w-4 h-4"></i>
                            <span>المستخدمين</span>
                        </a>
                    `;
                }
                if (canAccess('reports')) {
                    html += `
                        <a href="#" onclick="showSection('reports')" data-section="reports" class="nav-item ${currentSection === 'reports' ? 'active' : ''}">
                            <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                            <span>التقارير</span>
                        </a>
                    `;
                }
                if (canAccess('settings')) {
                    html += `
                        <a href="#" onclick="showSection('settings')" data-section="settings" class="nav-item ${currentSection === 'settings' ? 'active' : ''}">
                            <i data-lucide="settings" class="w-4 h-4"></i>
                            <span>الإعدادات</span>
                        </a>
                    `;
                }
            }

            nav.innerHTML = html;
            renderSidebarProjects(); // Refresh the dynamic list inside
            lucide.createIcons();
        };

        const renderSidebarProjects = () => {
            const list = document.getElementById('sidebar-projects-list');
            const filter = state.settings.projectFilter || 'active';

            const filterSelect = document.getElementById('sidebar-status-filter');
            if (filterSelect) filterSelect.value = filter;

            const filteredProjects = state.projects.filter(p => {
                if (state.currentUser.role === 'engineer') {
                    return p.id === state.currentUser.linkedProject;
                }
                if (filter === 'all') return true;
                return p.status === filter;
            });
            
            list.innerHTML = filteredProjects.map(p => {
                const stats = calculateProjectStats(p.id);
                const isActive = currentProjectId === p.id && currentSection === 'project';
                return `
                    <a href="#" onclick="showSection('project', '${p.id}')" data-section="project" data-id="${p.id}" 
                       class="nav-item !py-2.5 !px-5 !gap-3 ${isActive ? 'active' : ''}" title="${p.description || p.name}">
                        <div class="flex items-center">
                            <i data-lucide="${p.icon || 'building-2'}" class="w-4 h-4 ${stats.hasDeficit ? 'text-red-500' : 'text-blue-400'}"></i>
                        </div>
                        <span class="flex-1 truncate text-[0.85rem] font-medium transition-colors">${p.name}</span>
                        ${stats.hasDeficit ? '<i data-lucide="alert-circle" class="w-3 h-3 text-red-400"></i>' : ''}
                    </a>
                `;
            }).join('');

            if (filteredProjects.length === 0) {
                list.innerHTML = `<div class="px-5 py-3 text-[10px] text-gray-500 italic">لا توجد مشاريع ${filter === 'archived' ? 'مؤرشفة' : 'نشطة'}</div>`;
            }
            lucide.createIcons();
        };

        // --- Excel Import Logic ---
        const triggerExcelImport = (pid) => {
            document.getElementById(`excel-import-input-${pid}`).click();
        };

        const handleExcelImport = (e, pid) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (evt) => {
                const data = evt.target.result;
                const workbook = XLSX.read(data, { type: 'binary', cellDates: true });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);

                if (json.length === 0) {
                    showToast('الملف فارغ أو غير صالح', 'error');
                    return;
                }

                // Show Preview Modal
                showImportPreview(json, pid);
            };
            reader.readAsBinaryString(file);
            e.target.value = ''; // Reset input
        };

        const showImportPreview = (data, pid) => {
            const project = state.projects.find(p => p.id === pid);
            
            // Try to map columns intelligently
            const parsed = data.map(row => {
                const keys = Object.keys(row);
                return {
                    date: row['التاريخ'] || row['Date'] || row['date'] || new Date().toISOString().split('T')[0],
                    desc: row['البيان'] || row['الوصف'] || row['Description'] || row['desc'] || 'بدون وصف',
                    category: row['التصنيف'] || row['Category'] || row['category'] || 'إكسيل',
                    amount: parseFloat(row['المبلغ'] || row['Amount'] || row['amount'] || 0),
                    type: (row['النوع'] || row['Type'] || '').toString().includes('إيراد') ? 'in' : 'out',
                    method: 'cash'
                };
            }).filter(item => item.amount !== 0);

            const html = `
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">معاينة استيراد البيانات - ${project.name}</h3>
                    <p class="text-xs text-gray-500 mb-4">تم العثور على ${parsed.length} عملية. يرجى التأكد من المبالغ والتواريخ قبل الحفظ.</p>
                    
                    <div class="max-h-96 overflow-y-auto border rounded mb-6 custom-scrollbar">
                        <table class="w-full text-xs text-right">
                            <thead class="bg-slate-50 sticky top-0">
                                <tr>
                                    <th class="p-2 border-b">التاريخ</th>
                                    <th class="p-2 border-b">البيان</th>
                                    <th class="p-2 border-b">المبلغ</th>
                                    <th class="p-2 border-b">النوع</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${parsed.slice(0, 50).map(item => `
                                    <tr class="border-b hover:bg-slate-50">
                                        <td class="p-2">${item.date instanceof Date ? item.date.toLocaleDateString('en-CA') : item.date}</td>
                                        <td class="p-2 font-semibold">${item.desc}</td>
                                        <td class="p-2 font-bold ${item.type === 'in' ? 'text-green-600' : 'text-red-600'}">${item.amount}</td>
                                        <td class="p-2">${item.type === 'in' ? 'إيراد' : 'مصروف'}</td>
                                    </tr>
                                `).join('')}
                                ${parsed.length > 50 ? `<tr><td colspan="4" class="p-4 text-center text-gray-400 italic">وعمليات أخرى عددها ${parsed.length - 50}...</td></tr>` : ''}
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-end gap-2">
                        <button onclick="closeModal()" class="px-4 py-2 text-gray-500 font-bold">إلغاء</button>
                        <button onclick="confirmImport('${pid}', ${JSON.stringify(parsed).replace(/"/g, '&quot;')})" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg">تأكيد الاستيراد</button>
                    </div>
                </div>
            `;
            openModal(html);
        };

        window.confirmImport = (pid, transactions) => {
            const formatted = transactions.map(t => ({
                ...t,
                id: 'tx' + Math.random().toString(36).substr(2, 9),
                projectId: pid,
                date: t.date instanceof Date ? t.date.toISOString().split('T')[0] : (typeof t.date === 'string' ? t.date : new Date().toISOString().split('T')[0])
            }));

            state.transactions.push(...formatted);
            saveToLocalStorage();
            closeModal();
            showSection('project', pid);
            showToast(`تم استيراد ${formatted.length} عملية بنجاح`);
        };

        // --- Import/Export ---
        const backupData = () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "accounting_backup_" + new Date().toISOString().split('T')[0] + ".json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        };

        const importData = (input) => {
            const file = input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    state = imported;
                    saveToLocalStorage();
                    window.location.reload();
                } catch (err) {
                    showToast('خطأ في تنسيق الملف!', 'error');
                }
            };
            reader.readAsText(file);
        };

        const resetData = () => {
            if (confirm('سيؤدي هذا إلى مسح كافة البيانات المسجلة. هل أنت متأكد؟')) {
                localStorage.removeItem('accounting_state');
                window.location.reload();
            }
        };

        const exportToExcel = (pid) => {
            const project = state.projects.find(p => p.id === pid);
            const txs = state.transactions.filter(t => t.projectId === pid);
            const wsData = [
                ["تقرير مشروع", project.name],
                ["تاريخ التحرير", new Date().toLocaleDateString('ar-EG')],
                [],
                ["التاريخ", "البيان", "الفئة", "النوع", "المبلغ"]
            ];
            txs.forEach(t => {
                wsData.push([t.date, t.desc, t.category, t.type === 'in' ? 'وارد' : 'صادر', t.amount]);
            });
            const ws = XLSX.utils.aoa_to_sheet(wsData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, `${project.name}.xlsx`);
        };

        const updateSettings = () => {
            state.settings.companyName = document.getElementById('set-company-name').value;
            state.settings.taxRate = parseFloat(document.getElementById('set-tax-rate').value);
            state.settings.investorShare = parseFloat(document.getElementById('set-inv-share').value);
            state.settings.defaultCurrency = document.getElementById('set-default-currency').value || 'ج.م';
            state.settings.companyShare = 1 - state.settings.investorShare;
            
            state.settings.alertEnabled = document.getElementById('set-alert-enabled').checked;
            state.settings.alertThreshold = parseFloat(document.getElementById('set-alert-threshold').value);
            
            // Update project settings
            document.querySelectorAll('.project-icon-select').forEach(select => {
                const pid = select.dataset.pid;
                const p = state.projects.find(pj => pj.id === pid);
                if (p) p.icon = select.value;
            });
            document.querySelectorAll('.project-currency-input').forEach(input => {
                const pid = input.dataset.pid;
                const p = state.projects.find(pj => pj.id === pid);
                if (p) p.currency = input.value || 'ج.م';
            });
            document.querySelectorAll('.project-desc-input').forEach(input => {
                const pid = input.dataset.pid;
                const p = state.projects.find(pj => pj.id === pid);
                if (p) p.description = input.value;
            });

            saveToLocalStorage();
            // Update UI
            document.getElementById('app-company-name').innerHTML = `<i data-lucide="building-2" class="w-5 h-5 text-blue-600"></i> <span>${state.settings.companyName}</span>`;
            lucide.createIcons();
            
            showSection('settings');
            showToast('تم تحديث الإعدادات والعملات بنجاح');
        };

        // --- Initial Load ---
        document.addEventListener('DOMContentLoaded', () => {
            init();
            
            // Mobile toggle logic
            const mobileToggle = document.getElementById('mobile-toggle');
            if (mobileToggle) {
                mobileToggle.addEventListener('click', () => {
                    document.getElementById('sidebar').classList.toggle('open');
                });
            }
        });
    