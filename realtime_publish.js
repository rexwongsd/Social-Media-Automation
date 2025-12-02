// 实时发布功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化实时发布功能
    initRealTimePublishFunctions();
});

// 初始化实时发布功能
function initRealTimePublishFunctions() {
    // 获取实时发布按钮
    const realTimePublishBtn = document.getElementById('real-time-publish-btn');
    if (realTimePublishBtn) {
        realTimePublishBtn.addEventListener('click', function() {
            realTimePublish();
        });
    }
    
    // 获取定时发布按钮
    const schedulePublishBtn = document.getElementById('schedule-publish-btn');
    if (schedulePublishBtn) {
        schedulePublishBtn.addEventListener('click', function() {
            // 显示定时发布对话框或导航到发布计划页面
            showNotification('定时发布功能将在发布计划页面中进行设置');
            
            // 切换到发布计划页面
            setTimeout(() => {
                navigateToSection('schedule');
            }, 1500);
        });
    }
    
    // 获取关闭监控弹窗按钮
    const closeMonitorBtn = document.getElementById('close-monitor-btn');
    if (closeMonitorBtn) {
        closeMonitorBtn.addEventListener('click', function() {
            const publishMonitorModal = document.getElementById('publish-monitor-modal');
            if (publishMonitorModal) {
                publishMonitorModal.classList.add('hidden');
            }
        });
    }
    
    // 获取取消发布按钮
    const cancelPublishBtn = document.getElementById('cancel-publish-btn');
    if (cancelPublishBtn) {
        cancelPublishBtn.addEventListener('click', function() {
            if (confirm('确定要取消发布吗？')) {
                const publishMonitorModal = document.getElementById('publish-monitor-modal');
                if (publishMonitorModal) {
                    publishMonitorModal.classList.add('hidden');
                }
                
                showNotification('发布已取消');
            }
        });
    }
    
    // 获取查看详情按钮
    const viewDetailsBtn = document.getElementById('view-details-btn');
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', function() {
            const publishMonitorModal = document.getElementById('publish-monitor-modal');
            if (publishMonitorModal) {
                publishMonitorModal.classList.add('hidden');
            }
            
            // 切换到数据分析页面
            navigateToSection('analytics');
            showNotification('正在查看发布详情');
        });
    }
    
    // 设置选项卡切换功能
    setupSettingsTabs();
}

// 设置选项卡切换功能
function setupSettingsTabs() {
    const accountSettingsTab = document.getElementById('account-settings-tab');
    const socialAccountsTab = document.getElementById('social-accounts-tab');
    const notificationSettingsTab = document.getElementById('notification-settings-tab');
    const aiSettingsTab = document.getElementById('ai-settings-tab');
    const privacySettingsTab = document.getElementById('privacy-settings-tab');
    const apiSettingsTab = document.getElementById('api-settings-tab');
    
    const accountSettingsContent = document.getElementById('account-settings-content');
    const socialAccountsContent = document.getElementById('social-accounts-content');
    const notificationSettingsContent = document.getElementById('notification-settings-content');
    const aiSettingsContent = document.getElementById('ai-settings-content');
    const privacySettingsContent = document.getElementById('privacy-settings-content');
    const apiSettingsContent = document.getElementById('api-settings-content');
    
    // 账户设置选项卡
    if (accountSettingsTab && accountSettingsContent) {
        accountSettingsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(accountSettingsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            accountSettingsContent.classList.remove('hidden');
        });
    }
    
    // 社交媒体账号选项卡
    if (socialAccountsTab && socialAccountsContent) {
        socialAccountsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(socialAccountsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            socialAccountsContent.classList.remove('hidden');
        });
    }
    
    // 通知设置选项卡
    if (notificationSettingsTab && notificationSettingsContent) {
        notificationSettingsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(notificationSettingsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            notificationSettingsContent.classList.remove('hidden');
        });
    }
    
    // AI 设置选项卡
    if (aiSettingsTab && aiSettingsContent) {
        aiSettingsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(aiSettingsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            aiSettingsContent.classList.remove('hidden');
        });
    }
    
    // 隐私与安全选项卡
    if (privacySettingsTab && privacySettingsContent) {
        privacySettingsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(privacySettingsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            privacySettingsContent.classList.remove('hidden');
        });
    }
    
    // API 集成选项卡
    if (apiSettingsTab && apiSettingsContent) {
        apiSettingsTab.addEventListener('click', function() {
            // 更新选项卡样式
            updateSettingsTabStyles(apiSettingsTab);
            
            // 显示对应内容
            hideAllSettingsContent();
            apiSettingsContent.classList.remove('hidden');
        });
    }
    
    // 社交媒体账号连接按钮
    const connectTikTokBtn = document.getElementById('connect-tiktok');
    if (connectTikTokBtn) {
        connectTikTokBtn.addEventListener('click', function() {
            showNotification('正在连接TikTok账号...');
            
            // 模拟连接过程
            setTimeout(() => {
                showNotification('TikTok账号连接成功');
                
                // 更新TikTok账号状态
                const tiktokAccountSection = this.closest('.bg-white');
                if (tiktokAccountSection) {
                    const accountName = tiktokAccountSection.querySelector('p.text-sm');
                    const accountHandle = tiktokAccountSection.querySelector('p.text-xs');
                    const accountStatus = tiktokAccountSection.querySelector('.rounded-full');
                    const accountActions = tiktokAccountSection.querySelector('.pt-4');
                    
                    if (accountName) accountName.textContent = 'zhangxiaoming';
                    if (accountHandle) accountHandle.textContent = '@zhangxiaoming';
                    if (accountStatus) {
                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-green-100 text-green-800';
                        accountStatus.textContent = '已连接';
                    }
                    
                    if (accountActions) {
                        accountActions.innerHTML = `
                            <h6 class="text-sm font-medium mb-2">已授权权限</h6>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">发布内容</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">管理评论</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">查看数据</span>
                            </div>
                            <div class="flex justify-end mt-3">
                                <button class="text-gray-500 hover:text-red-500" id="disconnect-tiktok">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        `;
                        
                        // 添加断开连接按钮事件
                        const disconnectTikTokBtn = document.getElementById('disconnect-tiktok');
                        if (disconnectTikTokBtn) {
                            disconnectTikTokBtn.addEventListener('click', function() {
                                if (confirm('确定要断开TikTok账号连接吗？')) {
                                    showNotification('已断开TikTok账号连接');
                                    
                                    // 恢复到未连接状态
                                    if (accountName) accountName.textContent = '尚未连接';
                                    if (accountHandle) accountHandle.textContent = '点击下方按钮连接';
                                    if (accountStatus) {
                                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700';
                                        accountStatus.textContent = '未连接';
                                    }
                                    
                                    if (accountActions) {
                                        accountActions.innerHTML = `
                                            <button class="btn-primary w-full" id="connect-tiktok">
                                                <i class="fa fa-plus mr-2"></i>连接 TikTok 账号
                                            </button>
                                        `;
                                        
                                        // 重新绑定连接按钮事件
                                        initRealTimePublishFunctions();
                                    }
                                }
                            });
                        }
                    }
                }
            }, 2000);
        });
    }
    
    // 断开Facebook账号按钮
    const disconnectFacebookBtn = document.getElementById('disconnect-facebook');
    if (disconnectFacebookBtn) {
        disconnectFacebookBtn.addEventListener('click', function() {
            if (confirm('确定要断开Facebook账号连接吗？')) {
                showNotification('已断开Facebook账号连接');
                
                // 更新Facebook账号状态
                const facebookAccountSection = this.closest('.bg-white');
                if (facebookAccountSection) {
                    const accountName = facebookAccountSection.querySelector('p.text-sm');
                    const accountHandle = facebookAccountSection.querySelector('p.text-xs');
                    const accountStatus = facebookAccountSection.querySelector('.rounded-full');
                    const accountActions = facebookAccountSection.querySelector('.pt-4');
                    
                    if (accountName) accountName.textContent = '尚未连接';
                    if (accountHandle) accountHandle.textContent = '点击下方按钮连接';
                    if (accountStatus) {
                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700';
                        accountStatus.textContent = '未连接';
                    }
                    
                    if (accountActions) {
                        accountActions.innerHTML = `
                            <button class="btn-primary w-full" id="connect-facebook">
                                <i class="fa fa-plus mr-2"></i>连接 Facebook 账号
                            </button>
                        `;
                        
                        // 添加连接按钮事件
                        const connectFacebookBtn = document.getElementById('connect-facebook');
                        if (connectFacebookBtn) {
                            connectFacebookBtn.addEventListener('click', function() {
                                showNotification('正在连接Facebook账号...');
                                
                                // 模拟连接过程
                                setTimeout(() => {
                                    showNotification('Facebook账号连接成功');
                                    
                                    // 更新Facebook账号状态
                                    if (accountName) accountName.textContent = '张小明';
                                    if (accountHandle) accountHandle.textContent = '@zhangxiaoming';
                                    if (accountStatus) {
                                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-green-100 text-green-800';
                                        accountStatus.textContent = '已连接';
                                    }
                                    
                                    if (accountActions) {
                                        accountActions.innerHTML = `
                                            <h6 class="text-sm font-medium mb-2">已授权权限</h6>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">发布内容</span>
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">管理页面</span>
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">查看数据</span>
                                            </div>
                                            <div class="flex justify-end mt-3">
                                                <button class="text-gray-500 hover:text-red-500" id="disconnect-facebook">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        `;
                                        
                                        // 重新绑定断开连接按钮事件
                                        initRealTimePublishFunctions();
                                    }
                                }, 2000);
                            });
                        }
                    }
                }
            }
        });
    }
    
    // 断开Instagram账号按钮
    const disconnectInstagramBtn = document.getElementById('disconnect-instagram');
    if (disconnectInstagramBtn) {
        disconnectInstagramBtn.addEventListener('click', function() {
            if (confirm('确定要断开Instagram账号连接吗？')) {
                showNotification('已断开Instagram账号连接');
                
                // 更新Instagram账号状态
                const instagramAccountSection = this.closest('.bg-white');
                if (instagramAccountSection) {
                    const accountName = instagramAccountSection.querySelector('p.text-sm');
                    const accountHandle = instagramAccountSection.querySelector('p.text-xs');
                    const accountStatus = instagramAccountSection.querySelector('.rounded-full');
                    const accountActions = instagramAccountSection.querySelector('.pt-4');
                    
                    if (accountName) accountName.textContent = '尚未连接';
                    if (accountHandle) accountHandle.textContent = '点击下方按钮连接';
                    if (accountStatus) {
                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700';
                        accountStatus.textContent = '未连接';
                    }
                    
                    if (accountActions) {
                        accountActions.innerHTML = `
                            <button class="btn-primary w-full" id="connect-instagram">
                                <i class="fa fa-plus mr-2"></i>连接 Instagram 账号
                            </button>
                        `;
                        
                        // 添加连接按钮事件
                        const connectInstagramBtn = document.getElementById('connect-instagram');
                        if (connectInstagramBtn) {
                            connectInstagramBtn.addEventListener('click', function() {
                                showNotification('正在连接Instagram账号...');
                                
                                // 模拟连接过程
                                setTimeout(() => {
                                    showNotification('Instagram账号连接成功');
                                    
                                    // 更新Instagram账号状态
                                    if (accountName) accountName.textContent = 'zhangxiaoming';
                                    if (accountHandle) accountHandle.textContent = '@zhangxiaoming';
                                    if (accountStatus) {
                                        accountStatus.className = 'px-2 py-1 text-xs rounded-full bg-green-100 text-green-800';
                                        accountStatus.textContent = '已连接';
                                    }
                                    
                                    if (accountActions) {
                                        accountActions.innerHTML = `
                                            <h6 class="text-sm font-medium mb-2">已授权权限</h6>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">发布内容</span>
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">管理评论</span>
                                                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">查看数据</span>
                                            </div>
                                            <div class="flex justify-end mt-3">
                                                <button class="text-gray-500 hover:text-red-500" id="disconnect-instagram">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        `;
                                        
                                        // 重新绑定断开连接按钮事件
                                        initRealTimePublishFunctions();
                                    }
                                }, 2000);
                            });
                        }
                    }
                }
            }
        });
    }
}

// 更新设置选项卡样式
function updateSettingsTabStyles(activeTab) {
    const tabs = document.querySelectorAll('#settings-section .border-b button');
    tabs.forEach(tab => {
        tab.classList.remove('text-primary', 'border-b-2', 'border-primary');
        tab.classList.add('text-gray-500', 'hover:text-primary');
    });
    
    activeTab.classList.remove('text-gray-500', 'hover:text-primary');
    activeTab.classList.add('text-primary', 'border-b-2', 'border-primary');
}

// 隐藏所有设置内容
function hideAllSettingsContent() {
    const contents = document.querySelectorAll('#settings-section [id$="-content"]');
    contents.forEach(content => {
        content.classList.add('hidden');
    });
}

// 实时发布功能
function realTimePublish() {
    // 获取选中的平台
    const selectedPlatforms = [];
    const platformCheckboxes = document.querySelectorAll('#editor-section .form-checkbox');
    platformCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const platformName = checkbox.nextElementSibling.querySelector('span').textContent;
            selectedPlatforms.push(platformName);
        }
    });
    
    // 检查是否选择了平台
    if (selectedPlatforms.length === 0) {
        showNotification('请至少选择一个发布平台', 'error');
        return;
    }
    
    // 检查内容是否为空
    const titleInput = document.querySelector('#editor-section input[placeholder="输入标题..."]');
    const descriptionTextarea = document.querySelector('#editor-section textarea');
    if (!titleInput || !titleInput.value.trim()) {
        showNotification('请输入标题', 'error');
        return;
    }
    
    if (!descriptionTextarea || !descriptionTextarea.value.trim()) {
        showNotification('请输入内容描述', 'error');
        return;
    }
    
    // 显示发布监控弹窗
    const publishMonitorModal = document.getElementById('publish-monitor-modal');
    if (publishMonitorModal) {
        publishMonitorModal.classList.remove('hidden');
    }
    
    // 清空发布日志
    const publishLog = document.getElementById('publish-log');
    if (publishLog) {
        publishLog.innerHTML = `<p><span class="text-gray-400">[${getCurrentTime()}]</span> 开始准备发布内容...</p>`;
    }
    
    // 开始发布流程
    startPublishProcess(selectedPlatforms);
}

// 获取当前时间
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// 添加发布日志
function addPublishLog(message) {
    const publishLog = document.getElementById('publish-log');
    if (!publishLog) return;
    
    const logEntry = document.createElement('p');
    logEntry.innerHTML = `<span class="text-gray-400">[${getCurrentTime()}]</span> ${message}`;
    publishLog.appendChild(logEntry);
    
    // 滚动到底部
    publishLog.scrollTop = publishLog.scrollHeight;
}

// 更新平台发布状态
function updatePlatformStatus(platform, status, progress, message) {
    // 更新状态
    const statusElement = document.getElementById(`${platform}-status`);
    if (statusElement) {
        statusElement.className = 'px-2 py-1 text-xs rounded-full';
        
        switch (status) {
            case 'processing':
                statusElement.classList.add('bg-blue-100', 'text-blue-800');
                statusElement.textContent = '处理中';
                break;
            case 'success':
                statusElement.classList.add('bg-green-100', 'text-green-800');
                statusElement.textContent = '发布成功';
                break;
            case 'failed':
                statusElement.classList.add('bg-red-100', 'text-red-800');
                statusElement.textContent = '发布失败';
                break;
            case 'skipped':
                statusElement.classList.add('bg-gray-100', 'text-gray-800');
                statusElement.textContent = '已跳过';
                break;
            default:
                statusElement.classList.add('bg-blue-100', 'text-blue-800');
                statusElement.textContent = status;
        }
    }
    
    // 更新进度条
    const progressElement = document.getElementById(`${platform}-progress`);
    if (progressElement) {
        progressElement.style.width = `${progress}%`;
    }
    
    // 更新消息
    const messageElement = document.getElementById(`${platform}-message`);
    if (messageElement) {
        messageElement.textContent = message;
    }
}

// 更新总体进度
function updateOverallProgress(progress) {
    const progressBar = document.getElementById('overall-progress-bar');
    const progressText = document.getElementById('overall-progress-text');
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${progress}%`;
    }
}

// 开始发布流程
function startPublishProcess(platforms) {
    // 重置所有平台状态
    updatePlatformStatus('facebook', 'processing', 0, '正在准备发布...');
    updatePlatformStatus('instagram', 'processing', 0, '正在准备发布...');
    updatePlatformStatus('tiktok', 'skipped', 0, '未选择此平台');
    
    // 更新总体进度
    updateOverallProgress(0);
    
    // 添加发布日志
    addPublishLog('内容验证通过，开始发布流程');
    addPublishLog(`已选择发布到 ${platforms.join('、')}`);
    
    // 模拟发布过程
    let completedCount = 0;
    let totalSteps = platforms.length * 3; // 每个平台3个步骤
    let currentStep = 0;
    
    // 模拟Facebook发布
    if (platforms.includes('Facebook')) {
        setTimeout(() => {
            updatePlatformStatus('facebook', 'processing', 33, '正在连接Facebook账号...');
            addPublishLog('正在连接Facebook账号...');
            
            setTimeout(() => {
                updatePlatformStatus('facebook', 'processing', 66, '正在上传内容...');
                addPublishLog('Facebook: 正在上传内容...');
                
                setTimeout(() => {
                    // 随机决定是否发布成功
                    const isSuccess = Math.random() > 0.1; // 90%成功率
                    
                    if (isSuccess) {
                        updatePlatformStatus('facebook', 'success', 100, '发布成功');
                        addPublishLog('Facebook: 内容发布成功');
                    } else {
                        updatePlatformStatus('facebook', 'failed', 100, '发布失败，请重试');
                        addPublishLog('Facebook: 内容发布失败');
                    }
                    
                    completedCount++;
                    currentStep += 3;
                    updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
                    
                    // 检查是否所有平台都已处理完成
                    checkPublishCompletion(completedCount, platforms.length);
                }, 2000);
                
                currentStep++;
                updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
            }, 1500);
            
            currentStep++;
            updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
        }, 1000);
    } else {
        updatePlatformStatus('facebook', 'skipped', 0, '未选择此平台');
    }
    
    // 模拟Instagram发布
    if (platforms.includes('Instagram')) {
        setTimeout(() => {
            updatePlatformStatus('instagram', 'processing', 33, '正在连接Instagram账号...');
            addPublishLog('正在连接Instagram账号...');
            
            setTimeout(() => {
                updatePlatformStatus('instagram', 'processing', 66, '正在上传图片...');
                addPublishLog('Instagram: 正在上传图片...');
                
                setTimeout(() => {
                    // 随机决定是否发布成功
                    const isSuccess = Math.random() > 0.1; // 90%成功率
                    
                    if (isSuccess) {
                        updatePlatformStatus('instagram', 'success', 100, '发布成功');
                        addPublishLog('Instagram: 内容发布成功');
                    } else {
                        updatePlatformStatus('instagram', 'failed', 100, '发布失败，请重试');
                        addPublishLog('Instagram: 内容发布失败');
                    }
                    
                    completedCount++;
                    currentStep += 3;
                    updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
                    
                    // 检查是否所有平台都已处理完成
                    checkPublishCompletion(completedCount, platforms.length);
                }, 2500);
                
                currentStep++;
                updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
            }, 2000);
            
            currentStep++;
            updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
        }, 1500);
    } else {
        updatePlatformStatus('instagram', 'skipped', 0, '未选择此平台');
    }
    
    // 模拟TikTok发布
    if (platforms.includes('TikTok')) {
        setTimeout(() => {
            updatePlatformStatus('tiktok', 'processing', 33, '正在连接TikTok账号...');
            addPublishLog('正在连接TikTok账号...');
            
            setTimeout(() => {
                updatePlatformStatus('tiktok', 'processing', 66, '正在处理视频...');
                addPublishLog('TikTok: 正在处理视频...');
                
                setTimeout(() => {
                    // 随机决定是否发布成功
                    const isSuccess = Math.random() > 0.15; // 85%成功率
                    
                    if (isSuccess) {
                        updatePlatformStatus('tiktok', 'success', 100, '发布成功');
                        addPublishLog('TikTok: 内容发布成功');
                    } else {
                        updatePlatformStatus('tiktok', 'failed', 100, '发布失败，请重试');
                        addPublishLog('TikTok: 内容发布失败');
                    }
                    
                    completedCount++;
                    currentStep += 3;
                    updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
                    
                    // 检查是否所有平台都已处理完成
                    checkPublishCompletion(completedCount, platforms.length);
                }, 3000);
                
                currentStep++;
                updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
            }, 2500);
            
            currentStep++;
            updateOverallProgress(Math.round((currentStep / totalSteps) * 100));
        }, 2000);
    }
}

// 检查发布是否完成
function checkPublishCompletion(completedCount, totalCount) {
    if (completedCount >= totalCount) {
        addPublishLog('发布流程已完成');
        
        // 更新总体进度为100%
        updateOverallProgress(100);
        
        // 启用查看详情按钮
        const viewDetailsBtn = document.getElementById('view-details-btn');
        if (viewDetailsBtn) {
            viewDetailsBtn.disabled = false;
        }
        
        // 检查是否所有平台都发布成功
        const facebookStatus = document.getElementById('facebook-status').textContent;
        const instagramStatus = document.getElementById('instagram-status').textContent;
        const tiktokStatus = document.getElementById('tiktok-status').textContent;
        
        const allSuccess = 
            (facebookStatus === '已跳过' || facebookStatus === '发布成功') &&
            (instagramStatus === '已跳过' || instagramStatus === '发布成功') &&
            (tiktokStatus === '已跳过' || tiktokStatus === '发布成功');
        
        if (allSuccess) {
            addPublishLog('所有选中平台发布成功！');
            
            // 5秒后自动关闭监控弹窗并显示成功弹窗
            setTimeout(() => {
                const publishMonitorModal = document.getElementById('publish-monitor-modal');
                if (publishMonitorModal) {
                    publishMonitorModal.classList.add('hidden');
                }
                
                // 显示发布成功弹窗
                publishContent();
            }, 5000);
        } else {
            addPublishLog('部分平台发布失败，请查看详情');
        }
    }
}
