// 温馨提示和思念话语集合
const messages = [
    {
        title: "温馨提示",
        content: "记得按时吃饭，照顾好自己。"
    },
    {
        title: "思念之情",
        content: "想你了，不知道你此刻在做什么？"
    },
    {
        title: "温馨提示",
        content: "今天天气不错，记得出去走走，呼吸新鲜空气。"
    },
    {
        title: "思念之情",
        content: "每当想起我们在一起的时光，心中总是充满温暖。"
    },
    {
        title: "温馨提示",
        content: "多喝水，保持身体水分充足。"
    },
    {
        title: "思念之情",
        content: "距离虽远，但心与心的连接从未间断。"
    },
    {
        title: "温馨提示",
        content: "工作再忙，也要记得适当休息。"
    },
    {
        title: "思念之情",
        content: "期待与你重逢的那一天，迫不及待想见到你。"
    },
    {
        title: "温馨提示",
        content: "保持好心情，微笑面对每一天。"
    },
    {
        title: "思念之情",
        content: "你的笑容是我最大的动力，希望你每天都开心。"
    },
    {
        title: "温馨提示",
        content: "睡前喝杯热牛奶，有助于提高睡眠质量。"
    },
    {
        title: "思念之情",
        content: "无论何时何地，你都在我心里最重要的位置。"
    },
    {
        title: "温馨提示",
        content: "记得给家里打电话，报个平安。"
    },
    {
        title: "思念之情",
        content: "每一个美好的瞬间，都想与你分享。"
    },
    {
        title: "温馨提示",
        content: "多吃水果和蔬菜，保持健康的饮食习惯。"
    },
    {
        title: "思念之情",
        content: "有你在的日子，连空气都是甜的。"
    },
    {
        title: "温馨提示",
        content: "注意保暖，别感冒了。"
    },
    {
        title: "思念之情",
        content: "想和你一起看日落，一起数星星。"
    },
    {
        title: "温馨提示",
        content: "适当运动，保持活力。"
    },
    {
        title: "思念之情",
        content: "你是我生命中最美丽的风景。"
    }
];

// 颜色类名数组
const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];

// DOM 元素
const messageContainer = document.getElementById('message-container');

// 随机数生成函数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 创建单个消息窗口
function createMessageWindow() {
    // 随机选择一条消息
    const message = messages[getRandom(0, messages.length - 1)];
    
    // 创建窗口元素
    const windowElement = document.createElement('div');
    windowElement.className = `message-window ${colorClasses[getRandom(0, colorClasses.length - 1)]}`;
    
    // 设置窗口内容
    windowElement.innerHTML = `
        <h3>${message.title}</h3>
        <p>${message.content}</p>
    `;
    
    // 随机位置和动画延迟
    const containerWidth = messageContainer.offsetWidth;
    const containerHeight = messageContainer.offsetHeight;
    
    const posX = getRandom(50, containerWidth - 200);
    const posY = getRandom(50, containerHeight - 150);
    const delay = getRandom(0, 5) * 0.05; // 0-0.25秒的延迟
    const duration = getRandom(2, 4); // 2-4秒的动画周期（加快）
    
    windowElement.style.left = `${posX}px`;
    windowElement.style.top = `${posY}px`;
    windowElement.style.animationDelay = `${delay}s`;
    windowElement.style.animationDuration = `${duration}s`;
    
    // 添加点击交互
    windowElement.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(3deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
    
    // 添加鼠标悬停效果增强
    windowElement.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    windowElement.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
    
    // 添加到容器
    messageContainer.appendChild(windowElement);
    
    // 设置自动移除（可选，营造动态效果）
    setTimeout(() => {
        fadeOutAndRemove(windowElement);
    }, getRandom(8000, 15000)); // 8-15秒后移除（加快）
}

// 淡出并移除元素
function fadeOutAndRemove(element) {
    let opacity = 0.9;
    const fadeInterval = setInterval(() => {
        opacity -= 0.05; // 加快淡出速度
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            messageContainer.removeChild(element);
            // 移除后创建新的窗口，保持总数
            setTimeout(createMessageWindow, getRandom(200, 800)); // 加快创建速度
        }
    }, 30); // 加快间隔
}

// 创建背景粒子效果
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = getRandom(10, 50);
        const posX = getRandom(0, window.innerWidth);
        const posY = getRandom(0, window.innerHeight);
        const duration = getRandom(10, 30);
        const delay = getRandom(0, 10);
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        document.body.appendChild(particle);
    }
}

// 初始化函数
function init() {
    // 创建背景粒子
    createParticles();
    
    // 初始创建消息窗口
    const initialCount = window.innerWidth < 768 ? 6 : 12; // 增加初始数量
    
    // 分批创建，避免性能问题
    for (let i = 0; i < initialCount; i++) {
        setTimeout(createMessageWindow, i * 200); // 加快初始创建速度
    }
    
    // 设置定时添加新窗口，保持动态效果
    setInterval(() => {
        if (document.querySelectorAll('.message-window').length < (window.innerWidth < 768 ? 10 : 20)) {
            createMessageWindow();
        }
    }, 1500); // 加快添加频率
}

// 窗口调整大小时重新布局
window.addEventListener('resize', () => {
    // 清空现有窗口
    const existingWindows = document.querySelectorAll('.message-window');
    existingWindows.forEach(window => window.remove());
    
    // 重新创建窗口
    const newCount = window.innerWidth < 768 ? 6 : 12;
    for (let i = 0; i < newCount; i++) {
        setTimeout(createMessageWindow, i * 150); // 加快重新创建速度
    }
});

// 页面加载完成后初始化
window.addEventListener('load', init);