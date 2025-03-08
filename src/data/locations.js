// 位置数据
export const locationsData = [
    // 大阪地区
    {
      id: 'kansai_airport',
      name: '关西国际机场',
      lat: 34.4320,
      lng: 135.2302,
      type: 'transport',
      description: '关西国际机场是日本关西地区的主要国际机场，建在大阪湾的人工岛上。',
      tips: '机场有直达大阪市区的特急列车，约需1小时可到达市中心。'
    },
    {
      id: 'osaka_hotel',
      name: '大阪酒店',
      lat: 34.6937,
      lng: 135.5022,
      type: 'hotel',
      description: '位于大阪市中心，靠近主要交通枢纽，方便前往京都和奈良。',
      tips: '周边有便利店和餐厅，生活便利。'
    },
    {
      id: 'dotonbori',
      name: '道顿堀',
      lat: 34.6687,
      lng: 135.5037,
      type: 'attraction',
      description: '大阪最著名的美食和娱乐区，以霓虹灯广告和美食而闻名。',
      tips: '必尝美食：章鱼烧、大阪烧、串炸。'
    },
    {
      id: 'osaka_castle',
      name: '大阪城',
      lat: 34.6873,
      lng: 135.5262,
      type: 'attraction',
      description: '日本著名古迹，由丰臣秀吉于1583年所建。春季时城堡周围的樱花非常美丽。',
      tips: '登上天守阁可以俯瞰大阪全景，门票约600日元。'
    },
    {
      id: 'aqua_liner',
      name: '大阪水上巴士',
      lat: 34.6922,
      lng: 135.5177,
      type: 'attraction',
      description: '乘坐水上巴士游览大阪河川，从不同角度欣赏城市风光。',
      tips: '建议提前预约，全程约1小时。'
    },
    {
      id: 'dotonbori_lunch',
      name: '道顿堀美食区',
      lat: 34.6683,
      lng: 135.5027,
      type: 'restaurant',
      description: '大阪最著名的美食街，聚集了众多当地特色小吃和餐厅。',
      tips: '推荐尝试元祖炸串达摩新世界总店的串炸、金龙拉面和蟹道乐。'
    },
    {
      id: 'shinsaibashi',
      name: '心斋桥购物区',
      lat: 34.6717,
      lng: 135.5027,
      type: 'attraction',
      description: '大阪主要的购物区，有各种百货公司、精品店和药妆店。',
      tips: '这里是购买伴手礼和纪念品的好地方，许多店铺提供免税服务。'
    },
    
    // 京都地区
    {
      id: 'nijo_castle',
      name: '二条城',
      lat: 35.0142,
      lng: 135.7480,
      type: 'attraction',
      description: '1603年由德川家康建造的城堡，是京都重要的历史地标。春季期间，城内种植的300多棵樱花树若已开花，将是一道绝美风景。',
      tips: '参观时间约需1.5小时，门票约1000日元。'
    },
    {
      id: 'kinkakuji',
      name: '金阁寺',
      lat: 35.0394,
      lng: 135.7292,
      type: 'attraction',
      description: '正式名称为鹿苑寺，因其金色外观而闻名。这座被秀美庭园环绕的世界遗产，金色阁楼倒映在水池中的景象尤为壮观。',
      tips: '参观时间约需1小时，门票约400日元。'
    },
    {
      id: 'kyoto_lunch',
      name: '京都午餐',
      lat: 35.0037,
      lng: 135.7682,
      type: 'restaurant',
      description: '位于四条河原町附近的餐厅区，提供各种京都传统料理。',
      tips: '推荐尝试汤豆腐、湯葉料理或京都风味的寿司。'
    },
    {
      id: 'philosophers_path',
      name: '哲学之道',
      lat: 35.0255,
      lng: 135.7945,
      type: 'attraction',
      description: '这条沿着小溪的石子路全长约2公里，两侧种满樱花树。是京都最著名的赏樱地点之一。',
      tips: '即使不是满开时期，也可能有早开的樱花品种为您带来惊喜。'
    },
    {
      id: 'kiyomizu_temple',
      name: '清水寺',
      lat: 34.9949,
      lng: 135.7850,
      type: 'attraction',
      description: '建于778年的古老寺庙，以其独特的木质结构和壮观的景色而闻名。从清水舞台俯瞰京都全景，特别是在春季，景色格外迷人。',
      tips: '参观时间约需2小时，门票约400日元。别忘了到音羽瀑布祈求好运和健康长寿。'
    },
    {
      id: 'gion_dinner',
      name: '祇园晚餐',
      lat: 35.0036,
      lng: 135.7755,
      type: 'restaurant',
      description: '祇园是京都传统艺伎区，这里有许多提供正宗京都怀石料理的餐厅。',
      tips: '晚餐后可以在花见小路漫步，或许能偶遇艺伎或舞伎。'
    },
    {
      id: 'maruyama_park',
      name: '丸山公园',
      lat: 35.0033,
      lng: 135.7818,
      type: 'attraction',
      description: '京都最受欢迎的赏樱地点之一，特别是公园中央的"枝垂樱"（垂枝樱花）。',
      tips: '樱花季节会有夜间点灯活动，夜晚的樱花在灯光照射下呈现出与白天完全不同的美感。'
    },
    {
      id: 'arashiyama',
      name: '岚山',
      lat: 35.0094,
      lng: 135.6736,
      type: 'attraction',
      description: '京都西部的风景区，以渡月桥、竹林小径和沿岸的樱花景观而闻名。',
      tips: '建议在这里至少停留2-3小时，慢慢欣赏美景。'
    },
    {
      id: 'tenryuji',
      name: '天龙寺',
      lat: 35.0169,
      lng: 135.6745,
      type: 'attraction',
      description: '位于岚山的世界文化遗产，有着美丽的庭园，春季尤为美丽。',
      tips: '参观时间约需1小时，门票约500日元。'
    },
    {
      id: 'kyoto_station_dinner',
      name: '京都站晚餐',
      lat: 34.9858,
      lng: 135.7588,
      type: 'restaurant',
      description: '京都站内及周边有众多餐厅，提供从传统日本料理到现代美食的各种选择。',
      tips: '推荐尝试京都拉面或其他当地特色料理。'
    },
    
    // 奈良地区
    {
      id: 'nara_park',
      name: '奈良公园',
      lat: 34.6851,
      lng: 135.8398,
      type: 'attraction',
      description: '奈良市中心的大型公园，以自由漫步的野生鹿群而闻名。这些鹿被视为神的使者，非常亲人。',
      tips: '您可以购买专门的"鹿仙贝"饼干来喂食它们。注意不要在鹿面前晃动食物或地图，它们可能会变得激动。'
    },
    {
      id: 'todaiji',
      name: '东大寺',
      lat: 34.6890,
      lng: 135.8397,
      type: 'attraction',
      description: '建于8世纪的古老寺庙，内有日本最大的佛像之一。这座寺庙是日本佛教文化的顶峰。',
      tips: '您可以尝试穿过与大佛鼻孔差不多大小的柱洞，据说这样做能带来好运。参观时间约需1.5小时，门票约600日元。'
    },
    {
      id: 'kasuga_taisha',
      name: '春日大社',
      lat: 34.6810,
      lng: 135.8500,
      type: 'attraction',
      description: '奈良著名的神社，以其数百个铜灯笼与石灯笼而闻名，以及神社独特的建筑风格。',
      tips: '参观时间约需1小时，门票约500日元。'
    },
    {
      id: 'nara_lunch',
      name: '奈良午餐',
      lat: 34.6830,
      lng: 135.8330,
      type: 'restaurant',
      description: '在奈良老城区的餐厅，提供当地特色美食。',
      tips: '推荐品尝奈良特色的柿叶寿司或其他当地美食。'
    }
  ];