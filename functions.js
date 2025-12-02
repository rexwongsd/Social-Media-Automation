// 所有页面通用功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initDashboardFunctions();
    initTemplatesFunctions();
    initEditorFunctions();
    initScheduleFunctions();
    initAnalyticsFunctions();
    initAIGeneratorFunctions();
    initSettingsFunctions();
    initCommonFunctions();
});

// 仪表盘功能
function initDashboardFunctions() {
    // 欢迎卡片中的"创建新内容"按钮
    const createNewContentBtn = document.querySelector('.bg-gradient-to-r .btn-accent');
    if (createNewContentBtn) {
        createNewContentBtn.addEventListener('click', function() {
            navigateToSection('editor');
        });
    }

    // 欢迎卡片中的"查看计划"按钮
    const viewScheduleBtn = document.querySelector('.bg-gradient-to-r .bg-white.bg-opacity-20');
    if (viewScheduleBtn) {
        viewScheduleBtn.addEventListener('click', function() {
            navigateToSection('schedule');
        });
    }

    // 互动趋势图表的时间范围按钮
    const chartTimeButtons = document.querySelectorAll('.bg-white .flex.gap-2 button');
    if (chartTimeButtons.length >= 3) {
        chartTimeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                chartTimeButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新图表数据（模拟）
                updateEngagementChart(this.textContent.trim());
            });
        });
    }

    // 发布计划中的"查看全部计划"按钮
    const viewAllScheduleBtn = document.querySelector('.bg-white button.text-primary.hover\\:text-primary-dark');
    if (viewAllScheduleBtn) {
        viewAllScheduleBtn.addEventListener('click', function() {
            navigateToSection('schedule');
        });
    }

    // AI推荐内容中的"使用模板"按钮
    const useTemplateButtons = document.querySelectorAll('.bg-white .text-primary.hover\\:text-primary-dark.text-sm');
    useTemplateButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取模板ID（如果有的话）
            const templateCard = this.closest('.bg-white');
            const templateTitle = templateCard.querySelector('h4').textContent;
            
            // 切换到编辑器页面
            navigateToSection('editor');
            
            // 显示模板选择提示
            showNotification(`已选择模板: ${templateTitle}`);
        });
    });

    // AI推荐内容中的刷新按钮
    const refreshRecommendationsBtn = document.querySelector('.flex.items-center.gap-2.text-sm button');
    if (refreshRecommendationsBtn) {
        refreshRecommendationsBtn.addEventListener('click', function() {
            // 添加旋转动画
            this.querySelector('i').classList.add('fa-spin');
            
            // 模拟加载新内容
            setTimeout(() => {
                this.querySelector('i').classList.remove('fa-spin');
                showNotification('已更新AI推荐内容');
            }, 1000);
        });
    }
}

// 模板库功能
function initTemplatesFunctions() {
    // 搜索框
    const searchInput = document.querySelector('#templates-section input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    showNotification(`正在搜索模板: ${searchTerm}`);
                    // 这里可以添加实际的搜索逻辑
                }
            }
        });
    }

    // 创建模板按钮
    const createTemplateBtn = document.querySelector('#templates-section .btn-primary');
    if (createTemplateBtn) {
        createTemplateBtn.addEventListener('click', function() {
            navigateToSection('editor');
            showNotification('开始创建新模板');
        });
    }

    // 模板分类按钮
    const categoryButtons = document.querySelectorAll('#templates-section .flex.flex-wrap.gap-2 button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的选中状态
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
            });
            
            // 设置当前按钮为选中状态
            this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
            this.classList.add('bg-primary', 'text-white');
            
            // 过滤模板（模拟）
            const category = this.textContent.trim();
            showNotification(`已选择分类: ${category}`);
        });
    });

    // 模板收藏按钮
    const favoriteButtons = document.querySelectorAll('#templates-section .absolute.top-3.right-3 button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-heart-o')) {
                icon.classList.remove('fa-heart-o');
                icon.classList.add('fa-heart');
                this.classList.add('text-red-500');
                showNotification('已添加到收藏');
            } else {
                icon.classList.remove('fa-heart');
                icon.classList.add('fa-heart-o');
                this.classList.remove('text-red-500');
                showNotification('已取消收藏');
            }
        });
    });

    // 分页按钮
    const paginationButtons = document.querySelectorAll('#templates-section .flex.justify-center button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有页码按钮的选中状态
            paginationButtons.forEach(btn => {
                if (!btn.querySelector('i')) { // 不是箭头按钮
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('border', 'border-gray-300', 'text-gray-500', 'hover:bg-gray-100');
                }
            });
            
            // 设置当前页码按钮为选中状态
            if (!this.querySelector('i')) { // 不是箭头按钮
                this.classList.remove('border', 'border-gray-300', 'text-gray-500', 'hover:bg-gray-100');
                this.classList.add('bg-primary', 'text-white');
            }
            
            // 模拟页码切换
            showNotification('正在加载页面内容');
        });
    });
}

// 内容编辑器功能
function initEditorFunctions() {
    // 保存草稿按钮
    const saveDraftBtn = document.querySelector('#editor-section .btn-secondary');
    if (saveDraftBtn) {
        saveDraftBtn.addEventListener('click', function() {
            showNotification('草稿已保存');
        });
    }

    // 模板选择
    const templateThumbnails = document.querySelectorAll('#editor-section .grid.grid-cols-2.md\\:grid-cols-3.gap-4 > div');
    templateThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 移除所有缩略图的选中状态
            templateThumbnails.forEach(thumb => {
                thumb.classList.remove('border-primary');
                thumb.classList.add('border-gray-200');
            });
            
            // 设置当前缩略图为选中状态
            this.classList.remove('border-gray-200');
            this.classList.add('border-primary');
            
            // 更新预览图
            const previewImage = document.querySelector('#editor-section .aspect-square img');
            const selectedImage = this.querySelector('img');
            if (previewImage && selectedImage) {
                previewImage.src = selectedImage.src;
            }
        });
    });

    // 添加时间段按钮
    const addTimeSlotBtn = document.querySelector('#editor-section .flex.items-center.gap-2.text-primary');
    if (addTimeSlotBtn) {
        addTimeSlotBtn.addEventListener('click', function() {
            const timeSlotsContainer = this.parentElement;
            const newTimeSlot = document.createElement('div');
            newTimeSlot.className = 'flex gap-2';
            newTimeSlot.innerHTML = `
                <input type="text" class="input-field" placeholder="时间段...">
                <input type="text" class="input-field" placeholder="内容...">
                <button class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 hover:bg-red-200">
                    <i class="fa fa-trash"></i>
                </button>
            `;
            
            // 添加到容器
            timeSlotsContainer.insertBefore(newTimeSlot, this);
            
            // 为新添加的删除按钮添加事件
            const deleteBtn = newTimeSlot.querySelector('button');
            deleteBtn.addEventListener('click', function() {
                newTimeSlot.remove();
            });
        });
    }

    // 删除时间段按钮
    const deleteTimeSlotBtns = document.querySelectorAll('#editor-section .flex.gap-2 button');
    deleteTimeSlotBtns.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // 图片上传按钮
    const imageUploadBtn = document.querySelector('#editor-section .border-2.border-dashed button');
    const imageUploadInput = document.getElementById('image-upload');
    if (imageUploadBtn && imageUploadInput) {
        imageUploadBtn.addEventListener('click', function() {
            imageUploadInput.click();
        });
        
        imageUploadInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                showNotification(`已选择图片: ${fileName}`);
                // 这里可以添加实际的图片上传逻辑
            }
        });
    }

    // 平台选择
    const platformCheckboxes = document.querySelectorAll('#editor-section .form-checkbox');
    platformCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const platformName = this.nextElementSibling.querySelector('span').textContent;
            if (this.checked) {
                showNotification(`已选择发布到 ${platformName}`);
            } else {
                showNotification(`已取消发布到 ${platformName}`);
            }
        });
    });

    // 预览区平台选择按钮
    const previewPlatformButtons = document.querySelectorAll('#editor-section .flex.gap-2 button');
    if (previewPlatformButtons.length >= 3) {
        previewPlatformButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                previewPlatformButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新预览（模拟）
                showNotification(`已切换到 ${this.textContent} 预览`);
            });
        });
    }

    // 预览区尺寸选择按钮
    const sizeButtons = document.querySelectorAll('#editor-section .grid.grid-cols-3.gap-2 button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的选中状态
            sizeButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
            });
            
            // 设置当前按钮为选中状态
            this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
            this.classList.add('bg-primary', 'text-white');
            
            // 更新预览尺寸（模拟）
            showNotification(`已设置尺寸为 ${this.textContent}`);
        });
    });

    // 预览区操作按钮
    const previewActionButtons = document.querySelectorAll('#editor-section .absolute.top-3.right-3 button');
    if (previewActionButtons.length >= 2) {
        // 放大按钮
        previewActionButtons[0].addEventListener('click', function() {
            showNotification('放大预览');
            // 这里可以添加实际的放大逻辑
        });
        
        // 下载按钮
        previewActionButtons[1].addEventListener('click', function() {
            showNotification('正在下载图片');
            // 这里可以添加实际的下载逻辑
        });
    }

    // AI建议应用按钮
    const applySuggestionButtons = document.querySelectorAll('#editor-section .mt-2.text-xs.text-primary');
    applySuggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const suggestionType = this.parentElement.querySelector('h5').textContent;
            showNotification(`已应用 ${suggestionType} 建议`);
            
            // 根据建议类型更新内容
            if (suggestionType === '标题优化') {
                const titleInput = document.querySelector('#editor-section input[placeholder="输入标题..."]');
                if (titleInput) {
                    titleInput.value = '高效工作安排：提升团队协作效率的一天';
                }
            } else if (suggestionType === '最佳发布时间') {
                const timeInput = document.querySelector('#editor-section input[type="time"]');
                if (timeInput) {
                    timeInput.value = '08:30';
                }
            } else if (suggestionType === '热门标签推荐') {
                const descriptionTextarea = document.querySelector('#editor-section textarea');
                if (descriptionTextarea) {
                    descriptionTextarea.value += '\n\n#工作效率 #团队协作 #项目管理 #时间管理 #职场技能';
                }
            }
        });
    });

    // 获取更多建议按钮
    const getMoreSuggestionsBtn = document.querySelector('#editor-section .w-full.mt-4.py-2');
    if (getMoreSuggestionsBtn) {
        getMoreSuggestionsBtn.addEventListener('click', function() {
            showNotification('正在生成更多AI建议...');
            
            // 模拟加载
            setTimeout(() => {
                showNotification('已生成更多AI建议');
            }, 1500);
        });
    }

    // 确认发布按钮
    const confirmPublishBtn = document.querySelector('#editor-section .pt-3.border-t .btn-primary');
    if (confirmPublishBtn) {
        confirmPublishBtn.addEventListener('click', function() {
            publishContent();
        });
    }
}

// 发布计划功能
function initScheduleFunctions() {
    // 搜索框
    const searchInput = document.querySelector('#schedule-section input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    showNotification(`正在搜索计划: ${searchTerm}`);
                    // 这里可以添加实际的搜索逻辑
                }
            }
        });
    }

    // 新建计划按钮
    const createScheduleBtn = document.querySelector('#schedule-section .btn-primary');
    if (createScheduleBtn) {
        createScheduleBtn.addEventListener('click', function() {
            navigateToSection('editor');
        });
    }

    // 日历导航按钮
    const calendarNavButtons = document.querySelectorAll('#schedule-section .flex.items-center.gap-4 button');
    if (calendarNavButtons.length >= 2) {
        calendarNavButtons[0].addEventListener('click', function() {
            showNotification('切换到上个月');
            // 这里可以添加实际的日历导航逻辑
        });
        
        calendarNavButtons[1].addEventListener('click', function() {
            showNotification('切换到下个月');
            // 这里可以添加实际的日历导航逻辑
        });
    }

    // 日历视图切换按钮
    const calendarViewButtons = document.querySelectorAll('#schedule-section .flex.gap-2 button');
    if (calendarViewButtons.length >= 3) {
        calendarViewButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                calendarViewButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新日历视图（模拟）
                showNotification(`已切换到 ${this.textContent} 视图`);
            });
        });
    }

    // 计划状态筛选按钮
    const statusButtons = document.querySelectorAll('#schedule-section .flex.gap-2 button');
    if (statusButtons.length >= 4) {
        statusButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                statusButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 筛选计划（模拟）
                showNotification(`已筛选 ${this.textContent} 计划`);
            });
        });
    }

    // 计划编辑和删除按钮
    const editButtons = document.querySelectorAll('#schedule-section .fa-edit');
    const deleteButtons = document.querySelectorAll('#schedule-section .fa-trash');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planTitle = this.closest('tr').querySelector('p.font-medium').textContent;
            showNotification(`正在编辑计划: ${planTitle}`);
            navigateToSection('editor');
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planTitle = this.closest('tr').querySelector('p.font-medium').textContent;
            if (confirm(`确定要删除计划 "${planTitle}" 吗？`)) {
                this.closest('tr').remove();
                showNotification(`已删除计划: ${planTitle}`);
            }
        });
    });

    // 分页按钮
    const paginationButtons = document.querySelectorAll('#schedule-section .flex.justify-between button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有页码按钮的选中状态
            paginationButtons.forEach(btn => {
                if (!btn.querySelector('i')) { // 不是箭头按钮
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('border', 'border-gray-300', 'text-gray-500', 'hover:bg-gray-100');
                }
            });
            
            // 设置当前页码按钮为选中状态
            if (!this.querySelector('i')) { // 不是箭头按钮
                this.classList.remove('border', 'border-gray-300', 'text-gray-500', 'hover:bg-gray-100');
                this.classList.add('bg-primary', 'text-white');
            }
            
            // 模拟页码切换
            showNotification('正在加载页面内容');
        });
    });
}

// 数据分析功能
function initAnalyticsFunctions() {
    // 时间范围选择
    const timeRangeSelect = document.querySelector('#analytics-section select');
    if (timeRangeSelect) {
        timeRangeSelect.addEventListener('change', function() {
            showNotification(`已选择时间范围: ${this.value}`);
            // 更新图表数据（模拟）
            updateAnalyticsCharts(this.value);
        });
    }

    // 导出报告按钮
    const exportReportBtn = document.querySelector('#analytics-section .btn-primary');
    if (exportReportBtn) {
        exportReportBtn.addEventListener('click', function() {
            showNotification('正在导出报告...');
            
            // 模拟导出过程
            setTimeout(() => {
                showNotification('报告已导出');
            }, 1500);
        });
    }

    // 互动趋势图表的时间范围按钮
    const chartTimeButtons = document.querySelectorAll('#analytics-section .flex.gap-2 button');
    if (chartTimeButtons.length >= 3) {
        chartTimeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                chartTimeButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新图表数据（模拟）
                updateEngagementTrendChart(this.textContent.trim());
            });
        });
    }

    // 平台分布图表的视图切换按钮
    const platformViewButtons = document.querySelectorAll('#analytics-section .flex.gap-2 button');
    if (platformViewButtons.length >= 2) {
        platformViewButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                platformViewButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新图表数据（模拟）
                updatePlatformDistributionChart(this.textContent.trim());
            });
        });
    }

    // 查看全部内容表现按钮
    const viewAllContentBtn = document.querySelector('#analytics-section .text-primary.hover\\:text-primary-dark.text-sm');
    if (viewAllContentBtn) {
        viewAllContentBtn.addEventListener('click', function() {
            showNotification('正在加载所有内容表现数据');
            // 这里可以添加实际的加载逻辑
        });
    }

    // 受众分析的视图切换按钮
    const audienceViewButtons = document.querySelectorAll('#analytics-section .flex.gap-2 button');
    if (audienceViewButtons.length >= 3) {
        audienceViewButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的选中状态
                audienceViewButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-100', 'hover:bg-gray-200');
                });
                
                // 设置当前按钮为选中状态
                this.classList.remove('bg-gray-100', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 更新图表数据（模拟）
                updateAudienceDemographicsChart(this.textContent.trim());
            });
        });
    }
}

// 设置功能
function initSettingsFunctions() {
    // 保存设置按钮
    const saveSettingsBtn = document.querySelector('#settings-section .btn-primary');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            showNotification('正在保存设置...');
            
            // 模拟保存过程
            setTimeout(() => {
                showNotification('设置已保存');
            }, 1000);
        });
    }

    // 设置选项卡切换
    const settingsTabs = document.querySelectorAll('#settings-section .border-b button');
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有选项卡的选中状态
            settingsTabs.forEach(t => {
                t.classList.remove('text-primary', 'border-primary');
                t.classList.add('text-gray-500', 'hover:text-primary');
            });
            
            // 设置当前选项卡为选中状态
            this.classList.remove('text-gray-500', 'hover:text-primary');
            this.classList.add('text-primary', 'border-b-2', 'border-primary');
            
            // 切换内容（模拟）
            showNotification(`已切换到 ${this.textContent} 设置`);
        });
    });

    // 上传头像按钮
    const uploadAvatarBtn = document.querySelector('#settings-section .bg-gray-50 .btn-primary');
    if (uploadAvatarBtn) {
        uploadAvatarBtn.addEventListener('click', function() {
            showNotification('请选择图片文件');
            // 这里可以添加实际的图片上传逻辑
        });
    }

    // 升级账户按钮
    const upgradeAccountBtn = document.querySelector('#settings-section .pt-4.border-t button');
    if (upgradeAccountBtn) {
        upgradeAccountBtn.addEventListener('click', function() {
            showNotification('正在加载账户升级页面');
            // 这里可以添加实际的升级页面加载逻辑
        });
    }
}

// 通用功能
function initCommonFunctions() {
    // 通知功能
    window.showNotification = function(message) {
        // 检查是否已存在通知元素
        let notification = document.querySelector('.notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification fixed bottom-4 right-4 bg-dark text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-y-10 opacity-0 transition-all duration-300';
            document.body.appendChild(notification);
        }
        
        // 设置通知内容
        notification.textContent = message;
        
        // 显示通知
        notification.classList.remove('translate-y-10', 'opacity-0');
        
        // 3秒后隐藏通知
        setTimeout(() => {
            notification.classList.add('translate-y-10', 'opacity-0');
        }, 3000);
    };

    // 页面导航功能
    window.navigateToSection = function(sectionId) {
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const sections = document.querySelectorAll('.section-content');
        const sectionTitle = document.getElementById('section-title');

        // 更新侧边栏选中状态
        sidebarItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
                // 更新标题
                sectionTitle.textContent = item.querySelector('span').textContent;
            }
        });
        
        // 显示对应内容区域
        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(`${sectionId}-section`).classList.remove('hidden');

        // 关闭移动端侧边栏
        document.getElementById('mobile-sidebar').classList.add('hidden');
        document.getElementById('mobile-sidebar-content').classList.add('-translate-x-full');
    };

    // 发布内容功能
    window.publishContent = function() {
        const publishSuccessModal = document.getElementById('publish-success-modal');
        const viewPostBtn = document.getElementById('view-post-btn');
        const createNewBtn = document.getElementById('create-new-btn');

        // 显示发布成功弹窗
        publishSuccessModal.classList.remove('hidden');

        // 查看内容按钮
        viewPostBtn.addEventListener('click', function() {
            publishSuccessModal.classList.add('hidden');
            navigateToSection('schedule');
            showNotification('正在查看已发布内容');
        });

        // 创建新内容按钮
        createNewBtn.addEventListener('click', function() {
            publishSuccessModal.classList.add('hidden');
            showNotification('开始创建新内容');
            
            // 重置编辑器（模拟）
            const titleInput = document.querySelector('#editor-section input[placeholder="输入标题..."]');
            const descriptionTextarea = document.querySelector('#editor-section textarea');
            if (titleInput) titleInput.value = '';
            if (descriptionTextarea) descriptionTextarea.value = '';
        });
    };

    // 更新互动趋势图表
    window.updateEngagementChart = function(timeRange) {
        // 模拟不同时间范围的数据
        const data = {
            '周': [65, 78, 52, 91, 85, 107, 92],
            '月': [120, 190, 150, 250, 220, 300, 280, 320, 290, 350, 380, 420, 390, 450, 480, 520, 490, 550, 580, 620, 590, 650, 680, 720, 690, 750, 780, 820, 790, 850],
            '年': [1200, 1900, 1500, 2500, 2200, 3000, 2800, 3200, 2900, 3500, 3800, 4200]
        };
        
        const labels = {
            '周': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            '月': Array.from({length: 30}, (_, i) => `${i+1}日`),
            '年': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        };
        
        // 获取图表实例
        const ctx = document.getElementById('engagement-chart');
        if (ctx && ctx.chart) {
            // 更新图表数据
            ctx.chart.data.labels = labels[timeRange];
            ctx.chart.data.datasets[0].data = data[timeRange];
            ctx.chart.update();
        }
    };

    // 更新数据分析页面的互动趋势图表
    window.updateEngagementTrendChart = function(timeRange) {
        // 模拟不同时间范围的数据
        const likeData = {
            '周': [65, 78, 52, 91, 85, 107, 92],
            '月': [120, 190, 150, 250, 220, 300, 280, 320, 290, 350, 380, 420, 390, 450, 480, 520, 490, 550, 580, 620, 590, 650, 680, 720, 690, 750, 780, 820, 790, 850],
            '年': [1200, 1900, 1500, 2500, 2200, 3000, 2800, 3200, 2900, 3500, 3800, 4200]
        };
        
        const commentData = {
            '周': [28, 48, 40, 19, 86, 27, 90],
            '月': [50, 80, 60, 100, 90, 120, 110, 130, 120, 150, 160, 180, 170, 190, 200, 220, 210, 230, 240, 260, 250, 270, 280, 300, 290, 310, 320, 340, 330, 350],
            '年': [500, 800, 600, 1000, 900, 1200, 1100, 1300, 1200, 1500, 1600, 1800]
        };
        
        const shareData = {
            '周': [12, 25, 15, 30, 22, 35, 28],
            '月': [20, 40, 30, 50, 45, 60, 55, 70, 65, 80, 85, 95, 90, 100, 110, 120, 115, 125, 130, 140, 135, 145, 150, 160, 155, 165, 170, 180, 175, 185],
            '年': [200, 400, 300, 500, 450, 600, 550, 700, 650, 800, 850, 950]
        };
        
        const labels = {
            '周': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            '月': Array.from({length: 30}, (_, i) => `${i+1}日`),
            '年': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        };
        
        // 获取图表实例
        const ctx = document.getElementById('engagement-trend-chart');
        if (ctx && ctx.chart) {
            // 更新图表数据
            ctx.chart.data.labels = labels[timeRange];
            ctx.chart.data.datasets[0].data = likeData[timeRange];
            ctx.chart.data.datasets[1].data = commentData[timeRange];
            ctx.chart.data.datasets[2].data = shareData[timeRange];
            ctx.chart.update();
        }
    };

    // 更新平台分布图表
    window.updatePlatformDistributionChart = function(dataType) {
        // 模拟不同数据类型的数据
        const data = {
            '互动量': [1250, 1920, 1540, 850, 680],
            '发布量': [45, 62, 53, 38, 31]
        };
        
        // 获取图表实例
        const ctx = document.getElementById('platform-distribution-chart');
        if (ctx && ctx.chart) {
            // 更新图表数据
            ctx.chart.data.datasets[0].label = dataType;
            ctx.chart.data.datasets[0].data = data[dataType];
            ctx.chart.update();
        }
    };

    // 更新受众人口统计图表
    window.updateAudienceDemographicsChart = function(demographicType) {
        // 模拟不同人口统计类型的数据
        const data = {
            '年龄': {
                labels: ['18-24岁', '25-34岁', '35-44岁', '45-54岁', '55岁以上'],
                values: [15, 40, 25, 15, 5]
            },
            '性别': {
                labels: ['男性', '女性', '未知'],
                values: [45, 52, 3]
            },
            '地区': {
                labels: ['华东', '华北', '华南', '西南', '其他'],
                values: [35, 25, 20, 15, 5]
            }
        };
        
        // 获取图表实例
        const ctx = document.getElementById('audience-demographics-chart');
        if (ctx && ctx.chart) {
            // 更新图表数据
            ctx.chart.data.labels = data[demographicType].labels;
            ctx.chart.data.datasets[0].data = data[demographicType].values;
            ctx.chart.update();
        }
    };

    // 更新所有分析图表
    window.updateAnalyticsCharts = function(timeRange) {
        // 模拟更新所有图表
        updateEngagementTrendChart('周');
        updatePlatformDistributionChart('互动量');
        updateAudienceDemographicsChart('年龄');
    };
}

// AI生成器功能
function initAIGeneratorFunctions() {
    // 获取所有AI生成器相关元素
    const generateBtn = document.getElementById('generate-btn');
    const clearPromptBtn = document.getElementById('clear-prompt-btn');
    const copyResultBtn = document.getElementById('copy-result-btn');
    const downloadResultBtn = document.getElementById('download-result-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const retryBtn = document.getElementById('retry-btn');
    const saveGeneratedContentBtn = document.getElementById('save-generated-content-btn');
    const useGeneratedContentBtn = document.getElementById('use-generated-content-btn');
    const applyPromptSuggestionBtn = document.getElementById('apply-prompt-suggestion');
    const applyEngagementSuggestionBtn = document.getElementById('apply-engagement-suggestion');
    
    // 生成类型选择
    const generationTypeRadios = document.querySelectorAll('input[name="generation-type"]');
    generationTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // 移除所有标签的选中状态
            generationTypeRadios.forEach(radio => {
                const label = radio.parentElement;
                label.classList.remove('border-primary', 'bg-blue-50');
                label.classList.add('border-gray-200');
            });
            
            // 设置当前标签为选中状态
            const label = this.parentElement;
            label.classList.remove('border-gray-200');
            label.classList.add('border-primary', 'bg-blue-50');
            
            // 根据选择的生成类型更新界面
            updateGeneratorUI(this.value);
        });
    });
    
    // 生成按钮
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateContent();
        });
    }
    
    // 清空提示词按钮
    if (clearPromptBtn) {
        clearPromptBtn.addEventListener('click', function() {
            const mainPrompt = document.getElementById('main-prompt');
            const additionalRequirements = document.getElementById('additional-requirements');
            
            if (mainPrompt) mainPrompt.value = '';
            if (additionalRequirements) additionalRequirements.value = '';
            
            showNotification('提示词已清空');
        });
    }
    
    // 复制结果按钮
    if (copyResultBtn) {
        copyResultBtn.addEventListener('click', function() {
            const textResult = document.querySelector('#text-result .text-gray-700');
            if (!textResult) return;
            
            // 创建一个临时文本区域
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = textResult.textContent;
            document.body.appendChild(tempTextArea);
            
            // 选择并复制文本
            tempTextArea.select();
            document.execCommand('copy');
            
            // 移除临时文本区域
            document.body.removeChild(tempTextArea);
            
            // 显示复制成功通知
            showNotification('内容已复制到剪贴板');
            
            // 添加复制成功动画
            this.classList.add('bg-green-100', 'text-green-500');
            setTimeout(() => {
                this.classList.remove('bg-green-100', 'text-green-500');
            }, 1000);
        });
    }
    
    // 下载结果按钮
    if (downloadResultBtn) {
        downloadResultBtn.addEventListener('click', function() {
            const textResult = document.querySelector('#text-result .text-gray-700');
            if (!textResult) return;
            
            // 创建一个Blob对象
            const blob = new Blob([textResult.textContent], { type: 'text/plain' });
            
            // 创建一个下载链接
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'generated_content.txt';
            
            // 触发下载
            document.body.appendChild(a);
            a.click();
            
            // 清理
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
            
            showNotification('内容已下载');
        });
    }
    
    // 重新生成按钮
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', function() {
            generateContent();
        });
    }
    
    // 重试按钮
    if (retryBtn) {
        retryBtn.addEventListener('click', function() {
            generateContent();
        });
    }
    
    // 保存生成内容按钮
    if (saveGeneratedContentBtn) {
        saveGeneratedContentBtn.addEventListener('click', function() {
            showNotification('内容已保存为草稿');
        });
    }
    
    // 使用生成内容按钮
    if (useGeneratedContentBtn) {
        useGeneratedContentBtn.addEventListener('click', function() {
            // 切换到内容编辑器
            navigateToSection('editor');
            
            // 获取生成的内容
            const textResult = document.querySelector('#text-result .text-gray-700');
            if (!textResult) return;
            
            // 将生成的内容填充到编辑器中
            setTimeout(() => {
                const editorTitle = document.querySelector('#editor-section input[placeholder="输入标题..."]');
                const editorDescription = document.querySelector('#editor-section textarea');
                
                if (editorTitle && editorDescription) {
                    // 提取标题（第一行）
                    const lines = textResult.textContent.split('\n');
                    if (lines.length > 0) {
                        editorTitle.value = lines[0].replace(/[🎉🚀✨⏰]/g, '').trim();
                        
                        // 提取描述（剩余行）
                        const description = lines.slice(1).join('\n').trim();
                        editorDescription.value = description;
                    }
                }
                
                showNotification('已将生成的内容导入编辑器');
            }, 300);
        });
    }
    
    // 应用提示词优化建议按钮
    if (applyPromptSuggestionBtn) {
        applyPromptSuggestionBtn.addEventListener('click', function() {
            const mainPrompt = document.getElementById('main-prompt');
            if (!mainPrompt) return;
            
            // 优化提示词
            const originalPrompt = mainPrompt.value;
            const optimizedPrompt = `为科技公司创建一条关于新产品发布的社交媒体帖子，风格专业且吸引人。目标受众是25-40岁的科技爱好者和专业人士。

产品特点：
- 先进的AI技术，能够智能识别用户需求
- 超长续航时间，一次充电可使用12小时
- 简约时尚的设计，有多种颜色可选
- 多设备无缝连接，支持手机、平板和电脑

请包含相关关键词，并添加一个引人注目的标题。`;
            
            mainPrompt.value = optimizedPrompt;
            
            showNotification('已应用提示词优化建议');
        });
    }
    
    // 应用互动优化建议按钮
    if (applyEngagementSuggestionBtn) {
        applyEngagementSuggestionBtn.addEventListener('click', function() {
            const mainPrompt = document.getElementById('main-prompt');
            if (!mainPrompt) return;
            
            // 添加互动优化建议
            mainPrompt.value += '\n\n请在内容末尾添加一个问题，提高用户互动率，例如"您最期待哪个功能？欢迎在评论区分享您的想法！"';
            
            showNotification('已应用互动优化建议');
        });
    }
}

// 生成内容
function generateContent() {
    // 获取输入
    const mainPrompt = document.getElementById('main-prompt').value;
    const style = document.getElementById('style-select').value;
    const platform = document.getElementById('platform-select').value;
    const additionalRequirements = document.getElementById('additional-requirements').value;
    const includeHashtags = document.getElementById('include-hashtags').checked;
    
    // 获取选中的生成类型
    let generationType = 'text';
    const generationTypeRadios = document.querySelectorAll('input[name="generation-type"]');
    generationTypeRadios.forEach(radio => {
        if (radio.checked) {
            if (radio.nextElementSibling.textContent.includes('海报')) {
                generationType = radio.nextElementSibling.textContent.includes('内容+海报') ? 'both' : 'image';
            } else {
                generationType = 'text';
            }
        }
    });
    
    // 表单验证
    if (!mainPrompt.trim()) {
        showNotification('请输入主要内容', 'error');
        return;
    }
    
    // 显示生成过程
    const resultContent = document.getElementById('result-content');
    const generatingProcess = document.getElementById('generating-process');
    const generationError = document.getElementById('generation-error');
    
    if (resultContent) resultContent.classList.add('hidden');
    if (generationError) generationError.classList.add('hidden');
    if (generatingProcess) generatingProcess.classList.remove('hidden');
    
    // 模拟进度条
    simulateProgress();
    
    // 模拟生成过程
    setTimeout(() => {
        // 随机决定是否生成成功（80%成功率）
        const isSuccess = Math.random() > 0.2;
        
        if (isSuccess) {
            // 显示结果
            if (generatingProcess) generatingProcess.classList.add('hidden');
            if (resultContent) resultContent.classList.remove('hidden');
            
            // 根据生成类型更新结果
            updateGenerationResult(generationType);
            
            showNotification('内容生成成功');
        } else {
            // 显示错误
            if (generatingProcess) generatingProcess.classList.add('hidden');
            if (generationError) generationError.classList.remove('hidden');
            
            // 随机显示不同的错误消息
            const errorMessages = [
                '生成失败，请检查您的提示词并重试',
                '服务器暂时不可用，请稍后再试',
                '提示词过于复杂，请简化后重试',
                '生成过程中出现错误，请重试'
            ];
            
            const errorMessageElement = document.getElementById('error-message');
            if (errorMessageElement) {
                errorMessageElement.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            }
            
            showNotification('内容生成失败', 'error');
        }
    }, 3000);
}

// 模拟进度条
function simulateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (!progressBar || !progressText) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
        }
    }, 300);
}

// 更新生成结果
function updateGenerationResult(generationType) {
    const textResult = document.getElementById('text-result');
    const imageResult = document.getElementById('image-result');
    
    if (textResult) textResult.style.display = generationType === 'image' ? 'none' : 'block';
    if (imageResult) imageResult.style.display = generationType === 'text' ? 'none' : 'block';
    
    // 生成不同类型的内容
    if (generationType === 'text' || generationType === 'both') {
        // 更新文本结果
        updateTextResult();
    }
    
    if (generationType === 'image' || generationType === 'both') {
        // 更新图片结果
        updateImageResult();
    }
}

// 更新文本结果
function updateTextResult() {
    const style = document.getElementById('style-select').value;
    const platform = document.getElementById('platform-select').value;
    const includeHashtags = document.getElementById('include-hashtags').checked;
    
    // 根据风格和平台生成不同的内容
    let content = '';
    let hashtags = '';
    
    switch (style) {
        case 'professional':
            content = `
                <p class="mb-2">我们荣幸地宣布，公司最新产品即将正式上市。这款采用前沿技术的创新产品将为行业带来革命性变革，为用户提供卓越的使用体验。</p>
                <p class="mb-2">产品核心优势：</p>
                <ul class="list-disc pl-5 mb-2">
                    <li>搭载先进的人工智能算法，实现智能用户体验</li>
                    <li>超长续航设计，满足全天候使用需求</li>
                    <li>简约优雅的外观设计，融合现代美学理念</li>
                    <li>多设备无缝协同，提升工作效率</li>
                </ul>
                <p class="mb-2">产品将于11月15日正式发布，敬请期待。</p>
                <p class="mb-2">我们诚挚邀请您关注产品发布，体验科技带来的无限可能。</p>
            `;
            
            hashtags = '#科技创新 #智能生活 #产品发布 #科技趋势 #未来已来';
            break;
            
        case 'friendly':
            content = `
                <p class="mb-2">🎉 大揭秘！我们的最新产品即将震撼登场！ 🚀</p>
                <p class="mb-2">这款革命性的科技产品将彻底改变您的体验方式，带来前所未有的便捷与创新！</p>
                <p class="mb-2">✨ <strong>亮点抢先看：</strong></p>
                <ul class="list-disc pl-5 mb-2">
                    <li>搭载最先进的AI智能技术</li>
                    <li>超长续航，告别电量焦虑</li>
                    <li>简约时尚设计，彰显品味</li>
                    <li>多设备无缝连接，工作生活更高效</li>
                </ul>
                <p class="mb-2">⏰ <strong>重要日期：</strong>11月15日正式发布，敬请期待！</p>
                <p class="mb-2">想成为首批体验者吗？关注我们获取更多独家信息！</p>
            `;
            
            hashtags = '#科技创新 #智能生活 #新品发布 #科技趋势 #未来已来';
            break;
            
        case 'exciting':
            content = `
                <p class="mb-2">🔥 重磅消息！我们的超级新品即将引爆市场！ 🔥</p>
                <p class="mb-2">这款产品简直是黑科技的完美体现，你绝对不想错过！</p>
                <p class="mb-2">💥 <strong>你必须知道的四大亮点：</strong></p>
                <ul class="list-disc pl-5 mb-2">
                    <li>AI智能到让你怀疑人生！</li>
                    <li>续航强到让你忘记充电器的存在！</li>
                    <li>颜值高到让你一见倾心！</li>
                    <li>连接快到让你体验飞一般的感觉！</li>
                </ul>
                <p class="mb-2">📅 <strong>倒计时开始：</strong>11月15日，见证奇迹的时刻！</p>
                <p class="mb-2">准备好迎接科技革命了吗？评论区告诉我你最期待哪个功能！</p>
            `;
            
            hashtags = '#黑科技 #超级新品 #科技革命 #未来已来 #AI智能';
            break;
            
        case 'humorous':
            content = `
                <p class="mb-2">🤖 警告！我们的最新产品可能会让你爱上工作（或者至少不那么讨厌）！</p>
                <p class="mb-2">这款产品就像是科技界的喜剧演员，既能提高效率，又能让你会心一笑。</p>
                <p class="mb-2">😂 <strong>为什么你需要它：</strong></p>
                <ul class="list-disc pl-5 mb-2">
                    <li>AI智能：它比你的同事更懂你（可能也更有趣）</li>
                    <li>超长续航：比你的咖啡更持久</li>
                    <li>时尚设计：让你的办公桌颜值飙升</li>
                    <li>多设备连接：就像社交达人一样，和谁都能聊得来</li>
                </ul>
                <p class="mb-2">📅 <strong>发布日期：</strong>11月15日，准备好和拖延症说再见！</p>
                <p class="mb-2">最后一个问题：你觉得这款产品能让星期一变得不那么可怕吗？</p>
            `;
            
            hashtags = '#科技幽默 #工作效率 #智能办公 #告别拖延症 #科技改变生活';
            break;
            
        case 'inspirational':
            content = `
                <p class="mb-2">🌟 每一次创新，都是对未来的致敬。我们的最新产品，正是怀着这样的愿景诞生。</p>
                <p class="mb-2">这款产品不仅仅是科技的结晶，更是人类智慧与创造力的见证。</p>
                <p class="mb-2">💖 <strong>它代表着：</strong></p>
                <ul class="list-disc pl-5 mb-2">
                    <li>无限可能：AI技术打破边界，探索未知</li>
                    <li>持久信念：超长续航象征坚持不懈的精神</li>
                    <li>美学追求：简约设计中蕴含对完美的执着</li>
                    <li>连接力量：多设备协同展现合作的价值</li>
                </ul>
                <p class="mb-2">📅 <strong>11月15日</strong>，让我们一起见证科技如何点亮未来。</p>
                <p class="mb-2">你准备好成为这场变革的一部分了吗？分享你的创新故事，让我们共同成长。</p>
            `;
            
            hashtags = '#创新精神 #科技与人文 #未来已来 #梦想与坚持 #改变世界';
            break;
            
        default:
            content = `
                <p class="mb-2">我们很高兴地宣布，最新产品即将上市！这款革命性的产品将彻底改变行业格局，为用户带来前所未有的体验。</p>
                <p class="mb-2">主要特点：</p>
                <ul class="list-disc pl-5 mb-2">
                    <li>先进的AI技术</li>
                    <li>超长续航时间</li>
                    <li>简约时尚的设计</li>
                    <li>多设备无缝连接</li>
                </ul>
                <p class="mb-2">敬请期待，即将在11月15日正式发布！</p>
            `;
            
            hashtags = '#新产品 #科技创新 #智能生活 #科技趋势 #未来已来';
    }
    
    // 根据平台调整内容
    if (platform === 'tiktok') {
        content = content.replace(/<p class="mb-2">/g, '<p class="mb-1">');
        content = content.replace(/<ul class="list-disc pl-5 mb-2">/g, '<ul class="list-disc pl-5 mb-1">');
    }
    
    // 添加标签
    if (includeHashtags) {
        content += `<p class="mt-3">${hashtags}</p>`;
    }
    
    // 更新DOM
    const textResultContent = document.querySelector('#text-result .text-gray-700');
    if (textResultContent) {
        textResultContent.innerHTML = content;
    }
}

// 更新图片结果
function updateImageResult() {
    const imageResultImg = document.querySelector('#image-result img');
    if (!imageResultImg) return;
    
    // 随机选择一张图片
    const images = [
        'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/0c0dbfd94b094c089bebb9ea9a2813a4~tplv-a9rns2rl98-image.image?rcl=20251130085256003BC5885A78C852156C&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1767055995&x-signature=uA4XyqeUh1cx7JhsGITSw6ElSOk%3D',
        'https://p9-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/950c767fb74746ae9df7d00dcba6650f~tplv-a9rns2rl98-image.image?rcl=20251130085256003BC5885A78C852156C&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1767055994&x-signature=%2F5RknhERCXtIppyWjALpU7tj83w%3D',
        'https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/60b2b6e0a21e4ec88d1505aea7723368~tplv-a9rns2rl98-image.image?rcl=20251130085256003BC5885A78C852156C&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1767055996&x-signature=KDVQYp2lMf2fMM2KnLveFQmmH5c%3D'
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imageResultImg.src = randomImage;
}

// 更新生成器UI
function updateGeneratorUI(generationType) {
    const mainPromptLabel = document.querySelector('#ai-generator-section label.block.text-gray-700');
    const additionalRequirementsField = document.getElementById('additional-requirements');
    
    if (generationType === 'text') {
        if (mainPromptLabel) mainPromptLabel.textContent = '主要内容';
        if (additionalRequirementsField) additionalRequirementsField.placeholder = '例如：包含特定关键词、使用emoji、添加号召性用语等';
    } else if (generationType === 'image') {
        if (mainPromptLabel) mainPromptLabel.textContent = '图片描述';
        if (additionalRequirementsField) additionalRequirementsField.placeholder = '例如：风格（现代/复古）、颜色方案、构图要求等';
    } else if (generationType === 'both') {
        if (mainPromptLabel) mainPromptLabel.textContent = '内容描述';
        if (additionalRequirementsField) additionalRequirementsField.placeholder = '例如：内容风格、图片风格、颜色偏好等';
    }
}

// 改进通知功能，支持不同类型
window.showNotification = function(message, type = 'success') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center gap-3 transition-all duration-300 transform translate-x-full opacity-0`;
    
    // 根据类型设置样式
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
        notification.innerHTML = `<i class="fa fa-check-circle"></i><span>${message}</span>`;
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
        notification.innerHTML = `<i class="fa fa-exclamation-circle"></i><span>${message}</span>`;
    } else if (type === 'warning') {
        notification.classList.add('bg-yellow-500', 'text-white');
        notification.innerHTML = `<i class="fa fa-exclamation-triangle"></i><span>${message}</span>`;
    } else if (type === 'info') {
        notification.classList.add('bg-blue-500', 'text-white');
        notification.innerHTML = `<i class="fa fa-info-circle"></i><span>${message}</span>`;
    }
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.remove('translate-x-full', 'opacity-0');
    }, 10);
    
    // 自动关闭通知
    setTimeout(() => {
        notification.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
};
