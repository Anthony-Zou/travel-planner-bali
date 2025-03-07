import React, { useState } from "react";
import "./BaliTripMap.css";
// 每日行程数据
const tripDays = [
  {
    day: 0,
    title: "行程总览",
    description: "巴厘岛五天行程总览图",
    date: "2025年3月28日-4月1日",
    specialNote: "团队：6人",
  },
  {
    day: 1,
    title: "第一天 - 抵达与乌布市区体验",
    description: "抵达机场，前往乌布中心住宿，探索乌布市区，体验特色美食",
    date: "2025年3月28日",
    activities: [
      {
        time: "07:00-11:00",
        activity: "抵达登巴萨国际机场",
        cost: "0",
        businessName: "伍拉·赖国际机场 (Ngurah Rai International Airport)",
        address:
          "Jalan Raya Gusti Ngurah Rai, Tuban, Kuta, Badung Regency, Bali 80362",
        phone: "+62 361 751011",
        email: "contact@baliairport.com",
        hours: "24小时营业",
      },
      {
        time: "11:00-12:30",
        activity: "前往乌布Airbnb别墅",
        cost: "25",
        note: "包车费",
        businessName: "巴厘岛专业包车服务",
        address: "服务覆盖全岛",
        phone: "+62 812 3456 7890",
        email: "balitransport@example.com",
        hours: "全天候服务，提前预约",
      },
      {
        time: "12:30-14:00",
        activity: "入住、整理行李、短暂休息",
        cost: "0",
        note: "含轻便午餐",
        businessName: "乌布传统风格私人泳池别墅",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "入住时间: 14:00后, 退房时间: 12:00前",
      },
      {
        time: "14:00-16:00",
        activity: "采购日：为安宁日准备物品",
        cost: "20",
        note: "零食和饮料",
        businessName: "Bintang Supermarket Ubud",
        address: "Jl. Raya Ubud No.14, Ubud, Bali 80571",
        phone: "+62 361 975395",
        email: "不适用",
        hours: "每日 08:00-22:00",
      },
      {
        time: "16:00-17:30",
        activity: "文化体验：乌布皇宫参观",
        cost: "0",
        note: "免费景点",
        businessName: "乌布皇宫 (Puri Saren Agung)",
        address: "Jl. Raya Ubud No.8, Ubud, Bali 80571",
        phone: "不适用 (公共景点)",
        email: "不适用",
        hours: "每日 09:00-18:00, 特殊仪式期间可能关闭",
      },
      {
        time: "17:30-18:30",
        activity: "文化体验：乌布传统市场",
        cost: "0",
        note: "可购物",
        businessName: "乌布传统市场 (Ubud Traditional Art Market)",
        address: "Jl. Raya Ubud, Ubud, Bali 80571",
        phone: "不适用 (公共市场)",
        email: "不适用",
        hours: "每日 08:00-18:00",
      },
      {
        time: "18:30-19:30",
        activity: "特别体验：观看Ogoh-ogoh游行",
        cost: "0",
        note: "免费活动",
        businessName: "乌布市中心 (安宁日前夜游行)",
        address: "Jl. Raya Ubud, Ubud, Bali 80571",
        phone: "不适用 (公共活动)",
        email: "不适用",
        hours: "安宁日前夜 18:00-21:00",
      },
      {
        time: "19:30-21:00",
        activity: "特色美食：传统烤乳猪晚餐",
        cost: "15",
        note: "Ibu Oka餐厅",
        businessName: "Ibu Oka Warung Babi Guling",
        address: "Jl. Tegal Sari No.2, Ubud, Bali 80571",
        phone: "+62 361 976345",
        email: "info@ibuoka.com",
        hours: "每日 11:00-18:00 (建议提前到达，热门菜品可能售罄)",
      },
    ],
  },
  {
    day: 2,
    title: "第二天 - 安宁日（Nyepi）",
    description: "全天在别墅内休息，享受泳池和特色体验",
    date: "2025年3月29日",
    activities: [
      {
        time: "08:00-09:30",
        activity: "别墅早餐：在私人泳池边享用早餐",
        cost: "0",
        note: "含在住宿费中",
        businessName: "乌布传统风格私人泳池别墅",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "早餐服务 07:00-10:00",
      },
      {
        time: "09:30-11:30",
        activity: "休闲活动：泳池时光或瑜伽",
        cost: "0",
        businessName: "别墅内活动",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "全天",
      },
      {
        time: "11:30-13:30",
        activity: "团队活动：准备团队午餐",
        cost: "0",
        note: "含在采购费中",
        businessName: "别墅厨房",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "全天",
      },
      {
        time: "13:30-15:30",
        activity: "放松时间：午休或阅读",
        cost: "0",
        businessName: "别墅休息区",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "全天",
      },
      {
        time: "15:30-17:30",
        activity: "团队游戏：桌游或牌类游戏",
        cost: "0",
        businessName: "别墅公共区域",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "全天",
      },
      {
        time: "17:30-19:00",
        activity: "特别体验：私人泳池漂浮晚餐准备",
        cost: "20",
        note: "特别安排",
        businessName: "别墅管家服务",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "安宁日特别服务，提前一天预约",
      },
      {
        time: "19:00-21:00",
        activity: "特色体验：烛光漂浮晚餐",
        cost: "0",
        note: "含在特别安排中",
        businessName: "别墅私人泳池",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "安宁日特别服务",
      },
      {
        time: "21:00-23:00",
        activity: "夜间活动：星空下电影之夜",
        cost: "5",
        note: "租赁设备",
        businessName: "别墅户外区域",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "安宁日特别服务",
      },
    ],
  },
  {
    day: 3,
    title: "第三天 - 乌布周边至南部路线",
    description: "参观德格拉朗梯田，体验峡谷漂流，前往南部住宿地点",
    date: "2025年3月30日",
    activities: [
      {
        time: "07:00-08:30",
        activity: "早餐与打包：享用早餐并整理行李",
        cost: "0",
        note: "含在住宿费中",
        businessName: "乌布传统风格私人泳池别墅",
        address: "Jl. Raya Andong, Petulu, Ubud, Bali 80571",
        phone: "+62 361 975263",
        email: "booking@ubudvilla.com",
        hours: "早餐服务 07:00-10:00, 退房时间 12:00",
      },
      {
        time: "09:00-10:30",
        activity: "特色体验：德格拉朗梯田",
        cost: "8.5",
        note: "入场费1.5，秋千7",
        businessName: "德格拉朗梯田 (Tegallalang Rice Terrace)",
        address: "Jalan Raya Tegallalang, Tegallalang, Gianyar, Bali 80561",
        phone: "不适用 (公共景点)",
        email: "不适用",
        hours: "全天开放, 最佳参观时间: 07:00-10:00",
      },
      {
        time: "11:00-13:00",
        activity: "特色体验：峡谷漂流",
        cost: "25",
        note: "含装备和向导",
        businessName: "Sobek Bali Adventures",
        address: "Jl. Raya Kedewatan, Ubud, Bali 80571",
        phone: "+62 361 287059",
        email: "booking@sobek-adventure.com",
        hours: "每日漂流时段: 08:00, 09:00, 12:00, 14:00",
      },
      {
        time: "13:00-14:30",
        activity: "午餐：河畔餐厅用餐",
        cost: "20",
        note: "Swept Away Restaurant",
        businessName: "Swept Away Restaurant at The Samaya",
        address: "Banjar Baung, Desa Sayan, Ubud, Bali 80571",
        phone: "+62 361 973606",
        email: "info@thesamayabali.com",
        hours: "每日 11:00-22:00, 午餐最佳预订时间 12:00-14:00",
      },
      {
        time: "15:00-16:30",
        activity: "文化体验：圣猴森林公园",
        cost: "7",
        note: "入场费",
        businessName: "圣猴森林公园 (Sacred Monkey Forest Sanctuary)",
        address: "Jl. Monkey Forest, Ubud, Bali 80571",
        phone: "+62 361 971304",
        email: "info@monkeyforestubud.com",
        hours: "每日 08:30-18:00, 最后入场 17:30",
      },
      {
        time: "17:00-19:00",
        activity: "路线转移：前往南部住宿",
        cost: "0",
        note: "含在包车费用中",
        businessName: "巴厘岛专业包车服务",
        address: "服务覆盖全岛",
        phone: "+62 812 3456 7890",
        email: "balitransport@example.com",
        hours: "全天候服务，提前预约",
      },
      {
        time: "19:30-21:30",
        activity: "晚餐体验：金巴兰海滩烧烤晚餐",
        cost: "25",
        note: "Menega Cafe",
        businessName: "Menega Cafe",
        address: "Jl. Four Seasons, Muaya Beach, Jimbaran, Bali 80361",
        phone: "+62 361 705888",
        email: "info@menegacafe.com",
        hours: "每日 15:00-23:00, 日落时分最佳",
      },
    ],
  },
  {
    day: 4,
    title: "第四天 - 乌鲁瓦图区域",
    description: "包括情人崖、海神庙和浪漫晚餐",
    date: "2025年3月31日",
    activities: [
      {
        time: "08:00-09:30",
        activity: "特别早餐：别墅私人泳池边早餐",
        cost: "15",
        note: "香槟早餐",
        businessName: "金巴兰/乌鲁瓦图海景别墅",
        address: "Jl. Uluwatu, Pecatu, South Kuta, Bali 80361",
        phone: "+62 361 769976",
        email: "booking@southbalivilla.com",
        hours: "早餐服务 07:00-10:00",
      },
      {
        time: "10:00-12:00",
        activity: "特色体验：情人崖拍照",
        cost: "0",
        note: "免费景点",
        businessName: "卡朗波马悬崖 (Karang Boma Cliff)",
        address: "Jalan Pura Batu Pageh, Pecatu, South Kuta, Bali 80361",
        phone: "不适用 (公共景点)",
        email: "不适用",
        hours: "全天开放, 最佳光线时间: 上午10:00-12:00或下午16:00-18:00",
      },
      {
        time: "12:30-14:30",
        activity: "纪念日午餐：悬崖餐厅浪漫用餐",
        cost: "45",
        note: "含庆祝蛋糕",
        businessName: "The Edge Bali",
        address: "Jl. Pura Goa Lempeh, Banjar Dinas Kangin, Pecatu, Bali 80361",
        phone: "+62 361 847 0700",
        email: "intouch@theedgebali.com",
        hours: "每日 11:00-23:00, 需提前预订",
      },
      {
        time: "15:00-17:30",
        activity: "特色体验：高级花瓣SPA",
        cost: "60",
        note: "豪华花瓣浴套餐",
        businessName: "Karma Kandara Spa",
        address: "Jl. Villa Kandara, Banjar Wijaya Kusuma, Ungasan, Bali 80362",
        phone: "+62 361 848 2202",
        email: "spa@karmakandara.com",
        hours: "每日 09:00-21:00, 提前预约",
      },
      {
        time: "17:30-19:00",
        activity: "日落体验：海神庙日落+传统舞蹈",
        cost: "19",
        note: "入场4，舞蹈15",
        businessName: "乌鲁瓦图寺 (Uluwatu Temple)",
        address: "Pecatu, South Kuta, Badung Regency, Bali 80361",
        phone: "+62 361 762604",
        email: "不适用",
        hours: "每日 09:00-19:00, Kecak舞表演时间: 18:00-19:00",
      },
      {
        time: "19:30-21:30",
        activity: "纪念日晚餐：岩石酒吧悬崖晚餐",
        cost: "60",
        note: "含特制鸡尾酒",
        businessName: "Rock Bar at AYANA Resort",
        address: "Jl. Karang Mas Sejahtera, Jimbaran, Bali 80364",
        phone: "+62 361 702222",
        email: "restaurant.reservation@ayanaresort.com",
        hours: "每日 16:00-24:00, 需提前2周预订",
      },
      {
        time: "21:30-22:30",
        activity: "特色表演：海滩火舞表演",
        cost: "0",
        note: "含在晚餐费用中",
        businessName: "AYANA Resort火舞表演",
        address: "Jl. Karang Mas Sejahtera, Jimbaran, Bali 80364",
        phone: "+62 361 702222",
        email: "restaurant.reservation@ayanaresort.com",
        hours: "表演时间: 21:30 (每周一、三、五)",
      },
    ],
  },
  {
    day: 5,
    title: "第五天 - 水明漾/库塔区域与返程",
    description: "体验水上活动，购物，最后返回机场",
    date: "2025年4月1日",
    activities: [
      {
        time: "08:00-09:30",
        activity: "早餐：别墅最后一次早餐",
        cost: "0",
        note: "含在住宿费中",
        businessName: "金巴兰/乌鲁瓦图海景别墅",
        address: "Jl. Uluwatu, Pecatu, South Kuta, Bali 80361",
        phone: "+62 361 769976",
        email: "booking@southbalivilla.com",
        hours: "早餐服务 07:00-10:00",
      },
      {
        time: "09:30-10:30",
        activity: "整理行李：收拾行李，办理退房",
        cost: "0",
        businessName: "金巴兰/乌鲁瓦图海景别墅",
        address: "Jl. Uluwatu, Pecatu, South Kuta, Bali 80361",
        phone: "+62 361 769976",
        email: "booking@southbalivilla.com",
        hours: "退房时间: 12:00前",
      },
      {
        time: "11:00-13:00",
        activity: "特色体验：努沙杜瓦滑翔伞或浮潜",
        cost: "60",
        note: "滑翔伞60或浮潜25",
        businessName: "Bali Parasailing Adventure",
        address: "Nusa Dua Beach, BTDC Area, Nusa Dua, Bali 80363",
        phone: "+62 812 3698 7412",
        email: "info@baliparasailing.com",
        hours: "每日 09:00-17:00, 视天气情况而定",
      },
      {
        time: "13:30-15:00",
        activity: "午餐：海滩俱乐部轻松用餐",
        cost: "25",
        note: "Nusa Dua Beach Club",
        businessName: "Nusa Dua Beach Grill",
        address: "BTDC Complex Lot N5, Nusa Dua, Bali 80363",
        phone: "+62 361 771327",
        email: "info@nusaduabeachgrill.com",
        hours: "每日 10:00-22:00",
      },
      {
        time: "15:30-17:30",
        activity: "购物体验：库塔/水明漾购物",
        cost: "15",
        note: "含下午茶",
        businessName: "Beachwalk Shopping Center",
        address: "Jl. Pantai Kuta, Kuta, Bali 80361",
        phone: "+62 361 8464888",
        email: "info@beachwalkbali.com",
        hours: "每日 10:00-22:00",
      },
      {
        time: "18:00-20:00",
        activity: "告别晚餐：机场附近特色餐厅",
        cost: "20",
        note: "Made's Warung Kuta",
        businessName: "Made's Warung Kuta",
        address: "Jl. Raya Seminyak, Kuta, Bali 80361",
        phone: "+62 361 732130",
        email: "info@madeswarung.com",
        hours: "每日 10:00-23:00",
      },
      {
        time: "20:00-21:00",
        activity: "前往机场：前往机场办理登机",
        cost: "15",
        note: "包车费",
        businessName: "巴厘岛专业包车服务",
        address: "服务覆盖全岛",
        phone: "+62 812 3456 7890",
        email: "balitransport@example.com",
        hours: "全天候服务，提前预约",
      },
    ],
  },
];

const BaliTripMap = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedActivityDetails, setSelectedActivityDetails] = useState(null);

  const handleDayChange = (day) => {
    setActiveDay(day);
    setSelectedActivity(null);
    setSelectedActivityDetails(null);
  };

  const handleActivityClick = (index, activity) => {
    setSelectedActivity(index);
    setSelectedActivityDetails({
      name: activity.businessName || activity.activity,
      address: activity.address || "Address not available",
      phone: activity.phone || "Phone not available",
      email: activity.email || "Email not available",
      hours: activity.hours || "Hours not available",
      note: activity.note || "",
    });
  };

  const renderDaySelector = () => {
    return (
      <div>
        <div className="day-selector">
          {tripDays.map((day) => (
            <button
              key={day.day}
              onClick={() => handleDayChange(day.day)}
              className={`day-button ${activeDay === day.day ? "active" : ""}`}
            >
              <span className="day-number">{`Day ${day.day}`}</span>
              <span className="day-date">
                {day.date?.split("年")[1]?.split("日")[0] || ""}
              </span>
            </button>
          ))}
        </div>
        {renderTimeline()}
      </div>
    );
  };

  const renderTimeline = () => {
    const day = tripDays[activeDay];
    if (!day.activities) return null;

    return (
      <div className="timeline-container">
        <div className="timeline-card">
          <div className="timeline-header">
            <h3 className="timeline-title">{day.title}</h3>
            <p className="timeline-date">{day.date}</p>
          </div>
          <div className="timeline-content">
            {day.activities?.map((activity, index) => (
              <div
                key={index}
                className={`activity-item ${
                  selectedActivity === index ? "selected" : ""
                }`}
                onClick={() => handleActivityClick(index, activity)}
              >
                <div
                  className={`activity-card ${
                    selectedActivity === index ? "selected" : ""
                  }`}
                >
                  <div className="activity-content">
                    <div className="activity-details">
                      <div className="activity-meta">
                        <span className="activity-time">{activity.time}</span>
                        {activity.cost !== "0" && (
                          <span className="activity-cost">
                            {activity.cost} SGD
                          </span>
                        )}
                      </div>
                      <h4 className="activity-title">{activity.activity}</h4>
                      {activity.note && (
                        <p className="activity-note">{activity.note}</p>
                      )}
                    </div>
                  </div>
                  {selectedActivity === index && selectedActivityDetails && (
                    <div className="activity-details-panel">
                      <h4 className="details-title">Business Details</h4>
                      <div className="details-content">
                        <p>
                          <strong>Name:</strong> {selectedActivityDetails.name}
                        </p>
                        <p>
                          <strong>Address:</strong>{" "}
                          {selectedActivityDetails.address}
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          {selectedActivityDetails.phone}
                        </p>
                        <p>
                          <strong>Email:</strong>{" "}
                          {selectedActivityDetails.email}
                        </p>
                        <p>
                          <strong>Hours:</strong>{" "}
                          {selectedActivityDetails.hours}
                        </p>
                        {selectedActivityDetails.note && (
                          <p>
                            <strong>Additional Notes:</strong>{" "}
                            {selectedActivityDetails.note}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // SVG地图数据
  const renderMap = () => {
    if (activeDay === 0) {
      return (
        <svg viewBox="0 0 700 800" className="w-full h-full">
          {/* 背景地图轮廓 */}
          <path
            d="M120,100 C150,80 220,70 280,100 C340,130 380,200 380,270 C380,340 360,410 320,470 C280,530 240,550 180,530 C120,510 80,450 100,380 C120,310 90,120 120,100 Z"
            fill="#e6f7ff"
            stroke="#0099cc"
            strokeWidth="2"
          />

          {/* 主要区域标记 */}
          <circle cx="200" cy="200" r="20" fill="#ff9966" />
          <text
            x="200"
            y="180"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            德格拉朗
          </text>

          <circle cx="220" cy="270" r="20" fill="#66cc99" />
          <text
            x="220"
            y="250"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            乌布
          </text>

          <circle cx="250" cy="430" r="20" fill="#ff6666" />
          <text
            x="250"
            y="410"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            乌鲁瓦图
          </text>

          <circle cx="290" cy="390" r="20" fill="#cc99ff" />
          <text
            x="290"
            y="370"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            努沙杜瓦
          </text>

          <circle cx="210" cy="410" r="20" fill="#ffcc66" />
          <text
            x="210"
            y="390"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            金巴兰
          </text>

          <circle cx="180" cy="450" r="20" fill="#99ccff" />
          <text
            x="180"
            y="430"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            库塔
          </text>

          <rect x="160" y="480" width="30" height="30" fill="#ff9999" />
          <text
            x="175"
            y="500"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            机场
          </text>

          {/* 住宿标记 */}
          <path
            d="M220,270 L220,290 L240,290 L240,280 L230,270 Z"
            fill="#ff3333"
          />
          <text x="260" y="280" fontSize="12" fontWeight="bold" fill="#ff3333">
            住宿1
          </text>

          <path
            d="M230,420 L230,440 L250,440 L250,430 L240,420 Z"
            fill="#ff3333"
          />
          <text x="260" y="430" fontSize="12" fontWeight="bold" fill="#ff3333">
            住宿2
          </text>

          {/* 路线 */}
          <path
            d="M175,480 L220,270"
            stroke="#666666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="190"
            y="370"
            textAnchor="middle"
            fontSize="10"
            fill="#666666"
          >
            约1.5小时
          </text>

          <path
            d="M220,270 L200,200"
            stroke="#666666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="200"
            y="230"
            textAnchor="middle"
            fontSize="10"
            fill="#666666"
          >
            约20分钟
          </text>

          <path
            d="M220,270 L230,420"
            stroke="#666666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="240"
            y="340"
            textAnchor="middle"
            fontSize="10"
            fill="#666666"
          >
            约1.5小时
          </text>

          <path
            d="M230,420 L175,480"
            stroke="#666666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="190"
            y="460"
            textAnchor="middle"
            fontSize="10"
            fill="#666666"
          >
            约45分钟
          </text>

          {/* 方向标 */}
          <text x="120" y="120" fontSize="16" fontWeight="bold">
            北
          </text>
          <text x="120" y="520" fontSize="16" fontWeight="bold">
            南
          </text>
        </svg>
      );
    } else if (activeDay === 1) {
      return (
        <svg viewBox="0 0 500 400" className="w-full h-full">
          {/* 乌布市区地图 */}
          <rect
            x="100"
            y="100"
            width="300"
            height="200"
            fill="#f0f9e8"
            stroke="#999"
            strokeWidth="1"
          />

          {/* 主要地点 */}
          <circle cx="250" cy="150" r="15" fill="#66cc99" />
          <text
            x="250"
            y="130"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            乌布皇宫
          </text>

          <circle cx="300" cy="150" r="15" fill="#99cc66" />
          <text
            x="300"
            y="130"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            乌布市场
          </text>

          <circle cx="200" cy="200" r="15" fill="#ff9966" />
          <text
            x="200"
            y="180"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            住宿
          </text>

          <circle cx="250" cy="200" r="15" fill="#ffcc66" />
          <text
            x="250"
            y="220"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            Ibu Oka餐厅
          </text>

          <path
            d="M250,150 Q270,150 300,150"
            stroke="#ff6666"
            strokeWidth="2"
          />
          <text x="270" y="140" textAnchor="middle" fontSize="10" fill="#666">
            5分钟
          </text>

          <path
            d="M200,200 Q225,190 250,150"
            stroke="#ff6666"
            strokeWidth="2"
          />
          <text x="210" y="170" textAnchor="middle" fontSize="10" fill="#666">
            10分钟
          </text>

          <path
            d="M200,200 Q225,200 250,200"
            stroke="#ff6666"
            strokeWidth="2"
          />
          <text x="225" y="190" textAnchor="middle" fontSize="10" fill="#666">
            5分钟
          </text>

          <path
            d="M250,160 L300,160 L300,250 L200,250 L200,210"
            stroke="#ff9900"
            strokeWidth="3"
            strokeDasharray="5,2"
          />
          <text
            x="250"
            y="270"
            textAnchor="middle"
            fontSize="12"
            fill="#ff6600"
          >
            Ogoh-ogoh游行路线
          </text>
        </svg>
      );
    } else if (activeDay === 2) {
      return (
        <svg viewBox="0 0 500 400" className="w-full h-full">
          {/* 安宁日 - 别墅示意图 */}
          <rect
            x="150"
            y="100"
            width="200"
            height="200"
            fill="#e6f7ff"
            stroke="#0099cc"
            strokeWidth="2"
          />
          <path
            d="M150,100 L250,50 L350,100"
            fill="#99ccff"
            stroke="#0066cc"
            strokeWidth="2"
          />
          <rect
            x="200"
            y="150"
            width="100"
            height="150"
            fill="#99ccff"
            stroke="#0066cc"
            strokeWidth="2"
          />

          <ellipse
            cx="280"
            cy="220"
            rx="50"
            ry="30"
            fill="#80d4ff"
            stroke="#0099cc"
            strokeWidth="2"
          />
          <text
            x="280"
            y="225"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
            fill="#006699"
          >
            泳池
          </text>

          <text
            x="250"
            y="320"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#006699"
          >
            安宁日 - 全天在别墅内
          </text>
        </svg>
      );
    } else if (activeDay === 3) {
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full">
          {/* 第三天路线 */}
          <path
            d="M120,100 C150,80 220,70 280,100 C340,130 380,200 380,270 C380,340 360,410 320,470 C280,530 240,550 180,530 C120,510 80,450 100,380 C120,310 90,120 120,100 Z"
            fill="#e6f7ff"
            stroke="#0099cc"
            strokeWidth="1"
            opacity="0.3"
          />

          <circle cx="200" cy="200" r="15" fill="#ff9966" />
          <text
            x="200"
            y="180"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            德格拉朗梯田
          </text>

          <circle cx="220" cy="230" r="15" fill="#ff6666" />
          <text
            x="220"
            y="250"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            峡谷漂流
          </text>

          <circle cx="220" cy="270" r="15" fill="#66cc99" />
          <text
            x="220"
            y="290"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            圣猴森林
          </text>

          <circle cx="230" cy="420" r="15" fill="#ff3333" />
          <text
            x="230"
            y="400"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            南部住宿
          </text>

          <circle cx="210" cy="450" r="15" fill="#ffcc66" />
          <text
            x="210"
            y="470"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            金巴兰晚餐
          </text>

          <path
            d="M220,270 L200,200 L220,230 L220,270 L230,420 L210,450"
            stroke="#ff3333"
            strokeWidth="3"
            fill="none"
          />

          <text x="180" y="220" textAnchor="middle" fontSize="10" fill="#666">
            20分钟
          </text>
          <text x="200" y="240" textAnchor="middle" fontSize="10" fill="#666">
            10分钟
          </text>
          <text x="200" y="340" textAnchor="middle" fontSize="10" fill="#666">
            1.5小时
          </text>
          <text x="210" y="430" textAnchor="middle" fontSize="10" fill="#666">
            10分钟
          </text>
        </svg>
      );
    } else if (activeDay === 4) {
      return (
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* 第四天路线 - 乌鲁瓦图区域特写 */}
          <rect
            x="100"
            y="100"
            width="300"
            height="300"
            fill="#f0f7ff"
            stroke="#999"
            strokeWidth="1"
          />

          <circle cx="250" cy="200" r="15" fill="#ff3333" />
          <text
            x="250"
            y="180"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            南部住宿
          </text>

          <circle cx="200" cy="250" r="15" fill="#ff9966" />
          <text
            x="200"
            y="230"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            情人崖
          </text>

          <circle cx="300" cy="250" r="15" fill="#ffcc66" />
          <text
            x="300"
            y="230"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            悬崖餐厅
          </text>

          <circle cx="350" cy="300" r="15" fill="#cc99ff" />
          <text
            x="350"
            y="280"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            高级SPA
          </text>

          <circle cx="300" cy="350" r="15" fill="#66cc99" />
          <text
            x="300"
            y="370"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            海神庙
          </text>

          <circle cx="200" cy="350" r="15" fill="#ff6666" />
          <text
            x="200"
            y="370"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            岩石酒吧
          </text>

          <path
            d="M250,200 L200,250 L300,250 L350,300 L300,350 L200,350 L250,200"
            stroke="#ff3333"
            strokeWidth="3"
            fill="none"
          />

          <text x="220" y="220" textAnchor="middle" fontSize="10" fill="#666">
            15分钟
          </text>
          <text x="250" y="240" textAnchor="middle" fontSize="10" fill="#666">
            15分钟
          </text>
          <text x="330" y="270" textAnchor="middle" fontSize="10" fill="#666">
            20分钟
          </text>
          <text x="330" y="330" textAnchor="middle" fontSize="10" fill="#666">
            20分钟
          </text>
          <text x="250" y="350" textAnchor="middle" fontSize="10" fill="#666">
            30分钟
          </text>
          <text x="220" y="300" textAnchor="middle" fontSize="10" fill="#666">
            20分钟
          </text>

          <text
            x="250"
            y="420"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#ff3333"
          >
            路线
          </text>
        </svg>
      );
    } else if (activeDay === 5) {
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full">
          {/* 第五天路线 */}
          <path
            d="M120,100 C150,80 220,70 280,100 C340,130 380,200 380,270 C380,340 360,410 320,470 C280,530 240,550 180,530 C120,510 80,450 100,380 C120,310 90,120 120,100 Z"
            fill="#e6f7ff"
            stroke="#0099cc"
            strokeWidth="1"
            opacity="0.3"
          />

          <circle cx="230" cy="420" r="15" fill="#ff3333" />
          <text
            x="230"
            y="400"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            南部住宿
          </text>

          <circle cx="290" cy="390" r="15" fill="#cc99ff" />
          <text
            x="290"
            y="370"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            努沙杜瓦
          </text>

          <circle cx="180" cy="450" r="15" fill="#99ccff" />
          <text
            x="180"
            y="430"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            库塔/水明漾
          </text>

          <rect x="160" y="480" width="30" height="30" fill="#ff9999" />
          <text
            x="175"
            y="500"
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
          >
            机场
          </text>

          <path
            d="M230,420 L290,390 L180,450 L175,480"
            stroke="#ff3333"
            strokeWidth="3"
            fill="none"
          />

          <text x="260" y="395" textAnchor="middle" fontSize="10" fill="#666">
            30分钟
          </text>
          <text x="230" y="420" textAnchor="middle" fontSize="10" fill="#666">
            40分钟
          </text>
          <text x="170" y="460" textAnchor="middle" fontSize="10" fill="#666">
            15分钟
          </text>
        </svg>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: "10px 0",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          borderBottom: "1px solid #eee",
        }}
      >
        巴厘岛五天行程地图
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 100px)",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            overflow: "hidden",
            borderRight: "1px solid #eee",
          }}
        >
          {renderMap()}
        </div>

        <div
          style={{
            width: "50%",
            height: "100%",
            overflowY: "auto",
            padding: "15px",
          }}
        >
          {renderDaySelector()}
        </div>
      </div>

      <div
        style={{
          padding: "10px 0",
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
          borderTop: "1px solid #eee",
        }}
      >
        注：此地图为示意图，不按实际地理比例绘制，仅用于展示行程路线和相对位置关系。
      </div>
    </div>
  );
};

export default BaliTripMap;
