// 行程数据
export const itineraryData = [
  {
    date: '2025年3月20日 (星期四)',
    title: '抵达日',
    events: [
      {
        time: '20:00',
        title: '抵达关西国际机场',
        description: '从关西机场到大阪市中心约需1小时。可以乘坐关西机场特急"HARUKA"列车或南海电铁"Rapi:t"特急列车前往市区。',
        locationId: 'kansai_airport',
        tips: '建议购买ICOCA卡或关西周游卡，方便在大阪、京都和奈良之间移动。'
      },
      {
        time: '21:30',
        title: '入住大阪酒店',
        description: '建议入住靠近大阪站或难波站附近的酒店，这样第二天前往京都会更加便捷。',
        locationId: 'osaka_hotel'
      },
      {
        time: '22:00',
        title: '道顿堀晚餐',
        description: '若体力允许，可以在酒店附近的餐厅享用一顿简单的晚餐。道顿堀区域即使在晚上也很热闹，那里有许多营业至深夜的餐厅。',
        locationId: 'dotonbori',
        tips: '可以尝试当地著名的章鱼烧或其他宵夜小吃，感受一下大阪的夜生活氛围。'
      }
    ]
  },
  {
    date: '2025年3月21日 (星期五)',
    title: '京都赏樱之旅',
    events: [
      {
        time: '08:00',
        title: '早餐',
        description: '在酒店或附近咖啡店享用早餐。'
      },
      {
        time: '09:00',
        title: '前往京都',
        description: '搭乘JR线从大阪前往京都（约30分钟车程）。',
        routeId: 'osaka_to_kyoto'
      },
      {
        time: '10:00',
        title: '参观二条城',
        description: '这座1603年由德川家康建造的城堡，是京都重要的历史地标。春季期间，城内种植的300多棵樱花树若已开花，将是一道绝美风景。',
        locationId: 'nijo_castle',
        tips: '参观时间约需1.5小时。'
      },
      {
        time: '12:00',
        title: '参观金阁寺',
        description: '这座被秀美庭园环绕的世界遗产，金色阁楼倒映在水池中的景象尤为壮观。',
        locationId: 'kinkakuji',
        tips: '参观时间约需1小时。'
      },
      {
        time: '13:30',
        title: '午餐',
        description: '在京都市中心享用午餐，可以选择位于四条河原町附近的餐厅，品尝京都传统料理。',
        locationId: 'kyoto_lunch',
        tips: '推荐尝试汤豆腐、湯葉料理或京都风味的寿司。'
      },
      {
        time: '15:00',
        title: '哲学之道赏樱',
        description: '这条沿着小溪的石子路全长约2公里，两侧种满樱花树。即使不是满开时期，也可能有早开的樱花品种为您带来惊喜。',
        locationId: 'philosophers_path'
      },
      {
        time: '17:00',
        title: '清水寺及周边',
        description: '沿着二年坂和三年坂的传统街道漫步，欣赏京都传统建筑风貌，最终到达壮观的清水寺。',
        locationId: 'kiyomizu_temple',
        tips: '从清水舞台俯瞰京都全景，特别是在春季，景色格外迷人。参观时间约需2小时。'
      },
      {
        time: '19:30',
        title: '祇园晚餐',
        description: '在祇园地区享用正宗的京都怀石料理。',
        locationId: 'gion_dinner'
      },
      {
        time: '21:00',
        title: '丸山公园夜樱',
        description: '如果有夜樱点灯活动，可以前往丸山公园欣赏夜樱。夜晚的樱花在灯光照射下呈现出与白天完全不同的美感。',
        locationId: 'maruyama_park',
        tips: '夜樱点灯通常在樱花季节举办，请关注最新信息。'
      },
      {
        time: '22:30',
        title: '返回大阪',
        description: '乘坐JR线返回大阪入住酒店。',
        routeId: 'kyoto_to_osaka'
      }
    ]
  },
  {
    date: '2025年3月22日 (星期六)',
    title: '奈良一日游与京都续览',
    events: [
      {
        time: '08:00',
        title: '早餐',
        description: '在酒店享用早餐。'
      },
      {
        time: '09:00',
        title: '前往奈良',
        description: '从大阪乘坐近铁或JR线前往奈良（约45分钟）。',
        routeId: 'osaka_to_nara'
      },
      {
        time: '10:00',
        title: '奈良公园',
        description: '与众多野生鹿互动。这些鹿被视为神的使者，非常亲人。您可以购买专门的"鹿仙贝"饼干来喂食它们。',
        locationId: 'nara_park',
        tips: '在公园中漫步约1小时。注意不要在鹿面前晃动食物或地图，它们可能会变得激动。'
      },
      {
        time: '11:30',
        title: '东大寺',
        description: '这座寺庙是日本佛教文化的顶峰，内有日本最大的佛像之一。',
        locationId: 'todaiji',
        tips: '您可以尝试穿过与大佛鼻孔差不多大小的柱洞，据说这样做能带来好运。参观时间约需1.5小时。'
      },
      {
        time: '13:30',
        title: '春日大社',
        description: '欣赏数百个由朝拜者捐赠的铜灯笼与石灯笼，以及神社独特的建筑风格。',
        locationId: 'kasuga_taisha',
        tips: '参观时间约需1小时。'
      },
      {
        time: '14:30',
        title: '奈良午餐',
        description: '在奈良老城区享用午餐，可以品尝奈良特色的柿叶寿司或其他当地美食。',
        locationId: 'nara_lunch'
      },
      {
        time: '16:00',
        title: '返回京都，前往岚山',
        description: '午后返回京都，前往岚山地区。这里的渡月桥、竹林小径以及沿岸的樱花景观堪称京都最美风景之一。',
        locationId: 'arashiyama',
        routeId: 'nara_to_kyoto'
      },
      {
        time: '17:30',
        title: '天龙寺',
        description: '参观嵯峨野的天龙寺，这座世界文化遗产有着美丽的庭园，春季尤为美丽。',
        locationId: 'tenryuji'
      },
      {
        time: '19:00',
        title: '京都站晚餐',
        description: '在京都站附近享用晚餐，可以品尝京都拉面或其他当地特色料理。',
        locationId: 'kyoto_station_dinner'
      },
      {
        time: '21:00',
        title: '返回大阪',
        description: '乘坐JR列车返回大阪。',
        routeId: 'kyoto_to_osaka'
      }
    ]
  },
  {
    date: '2025年3月23日 (星期日)',
    title: '大阪观光与美食',
    events: [
      {
        time: '08:00',
        title: '早餐与退房',
        description: '在酒店享用早餐后退房。可将行李存放在酒店或车站储物柜中。'
      },
      {
        time: '09:30',
        title: '大阪城公园',
        description: '参观这座大阪标志性建筑。春季时节，城堡周围的樱花园可能也有早樱绽放。',
        locationId: 'osaka_castle',
        tips: '登上天守阁顶层，可以360度俯瞰大阪全景。参观时间约需2小时。'
      },
      {
        time: '12:00',
        title: '大阪水上巴士',
        description: '乘坐大阪水上巴士"Aqua Liner"，从水上欣赏大阪风景。',
        locationId: 'aqua_liner',
        tips: '全程约1小时。'
      },
      {
        time: '13:30',
        title: '道顿堀美食之旅',
        description: '前往道顿堀美食区，这里是体验大阪"吃到破产"文化的最佳地点。',
        locationId: 'dotonbori_lunch',
        tips: '推荐尝试元祖炸串达摩新世界总店的串炸、章鱼烧和大阪烧等大阪特色美食。'
      },
      {
        time: '15:30',
        title: '心斋桥购物',
        description: '在心斋桥和难波地区享受购物时光，购买最后的纪念品和伴手礼。',
        locationId: 'shinsaibashi'
      },
      {
        time: '17:00',
        title: '前往关西国际机场',
        description: '从大阪市区前往关西国际机场（需预留约1.5小时交通时间），以确保有足够时间办理登机手续。',
        routeId: 'osaka_to_airport'
      }
    ]
  }
];