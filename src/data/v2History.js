const accessedAt = '2026-11-04';
const source = (id,title,publisher,url,supports) => ({id,title,publisher,url,accessedAt,supports});
const s = {
  spark: source('spark','革命星火燎陇原——土地革命战争时期甘肃的武装斗争','甘肃省委党史研究室／中共中央党史和文献研究院','https://www.dswxyjy.org.cn/n1/2021/0312/c244516-32050244.html','太白收枪、两当兵变、靖远兵变及早期武装斗争'),
  liangdang: source('liangdang','“两当兵变”的重要历史和现实意义','全国哲学社会科学工作办公室','https://www.nopss.gov.cn/n1/2022/0720/c219544-32480453.html','兵运准备及两当兵变的历史背景'),
  base: source('base','孕育了革命的陕甘边根据地','学习时报／秦风网','https://www.qinfeng.gov.cn/info/1064/232272.htm','包家寨会议、荔园堡建政、十大政策、陕甘边和陕北根据地的统一领导'),
  spirit: source('spirit','南梁精神孕育形成的历史揭示了什么？','学习时报／共产党员网','https://www.12371.cn/2021/07/10/ARTI1625883809985282.shtml','南梁精神内涵及根据地历史地位'),
  reunion: source('reunion','红军长征过静宁','静宁县人民政府','https://www.gsjn.gov.cn/zjjn/jnfz/art/2022/art_f50ab4aff934446c8967070a69859278.html','会宁、将台堡会师的时间、地点及参会部队'),
  dadunliang: source('dadunliang','红军会宁会师第一战：大墩梁阻击战','学习时报／中国共产党新闻网','https://cpc.people.com.cn/n1/2022/0909/c443712-32522954.html','会师前后华家岭、大墩梁阻击经过'),
  west: source('west','红西路军在张掖的战斗','张掖市史志办','https://www.zhangye.gov.cn/szb/dzdt/gjzy/202007/t20200714_457523_ghb.html','西渡黄河、古浪、高台、临泽、梨园口和石窝会议'),
  gan: source('gan','腊子口与哈达铺的长征史事','盐田区档案与史志信息网','https://www.yantian.gov.cn/ytdayszxxw/lsjt/content/post_11735175.html','腊子口作战过程、先头部队与中央机关分批抵达、榜罗镇会议'),
  hadapu: source('hadapu','百年瞬间丨中央红军长征来到哈达铺','共产党员网','https://www.12371.cn/2021/02/22/VIDE1613964001034993.shtml','哈达铺休整与报纸线索'),
  bangluo: source('bangluo','长征中的会议：榜罗镇会议','共产党员网','https://fuwu.12371.cn/2012/06/11/ARTI1339400564382590_13.shtml','哈达铺与榜罗镇决策演进'),
  ejie: source('ejie','长征中的会议：俄界会议','共产党员网','https://fuwu.12371.cn/2012/06/11/ARTI1339400564382590_12.shtml','俄界会议与继续北上方针'),
  shan: source('shan','经典战斗：山城堡战役','解放军报／中央网信办','https://www.cac.gov.cn/2016-08/22/c_1119432060.htm','山城堡战斗的时间、部队协同及意义'),
  lanzhou: source('lanzhou','1949年8月26日，解放军攻占兰州','盐田区档案与史志信息网','https://www.yantian.gov.cn/ytdayszxxw/lsjt/content/post_11735321.html','第一野战军合围、总攻与兰州解放'),
  office: source('office','红色小院 精神高地——走进八路军兰州办事处纪念馆','文化和旅游部／中国旅游报','https://www.mct.gov.cn/whzx/qgwhxxlb/gs/202508/t20250811_961651.htm','兰州办事处在抗战时期的工作及其与甘肃工委的联系'),
};
const section = (title,text,...refs) => ({title,text,refs});
const time = (date,text,...refs) => ({date,text,refs});
export const historyRecords = [
  {
    id:'nanliang', title:'南梁精神', subtitle:'陕甘边革命根据地', region:'庆阳市', theme:'根据地', priority:'important',
    summary:'从包家寨会议的战略转向，到荔园堡的政权建设，南梁的历史可以沿武装、群众与制度三条线索阅读。',
    visual:'plate_nanliang', composition:'foundation',
    sections:[
      section('根据地如何形成','南梁的兴起经历了区域武装的创建、挫折和调整。照金苏区遭受破坏之后，1933年11月，陕甘边区特委与红军临时总指挥部在甘肃合水包家寨召开联席会议，决定恢复红二十六军并成立四十二师，将南梁作为新的中心。与此同时，地方工作者组织农民联合会等群众组织，军事活动和地方组织建设相互支撑。','base'),
      section('从军事活动走向政权建设','1934年11月7日，陕甘边区苏维埃政府在南梁荔园堡成立。习仲勋当选政府主席，刘志丹任军事委员会主席。后来部分机关迁至寨子湾，因此应当分别理解荔园堡的建政地点与机关迁驻后的工作地点。土地、财政、文化等分工让根据地逐步形成可持续的组织和治理体系。','base'),
      section('群众生活与根据地治理','南梁政府的政策同时回应生产、流通与教育。开设集市、鼓励边区内外交易，改善了部分物资供应；兴办学校和调整土地政策，则把政权工作落实到当地群众的日常生活。阅读这些政策，可以看到根据地怎样在封锁和战争压力下维持生产与社会动员。','base'),
      section('“两点一存”的历史语境','1935年，陕甘边和陕北根据地逐步实现统一领导并连成一片。常说的“两点一存”，指发展起来的根据地成为中共中央和中央红军长征的落脚点、红军北上抗日的出发点，也是土地革命战争后期保存下来的完整革命根据地。这里说的是更广范围的陕甘革命根据地，不能把中央红军到达吴起镇写成到达南梁荔园堡。','base','spirit'),
      section('从实践理解南梁精神','坚守信念、面向群众、顾全大局和求实开拓，可以分别对应武装力量在挫折后的坚持、政策对群众生活的回应、根据地之间的协同和实际治理中的调整。这些实践为理解南梁精神提供了可具体查阅的历史线索。','spirit','base'),
    ],
    timeline:[time('1933.11','包家寨会议提出创建以南梁为中心的根据地。','base'),time('1934.11.07','陕甘边区苏维埃政府在荔园堡成立。','base'),time('1935.02','周家崄会议推动两块根据地的统一领导。','base'),time('1935.10','中共中央与陕甘支队到达吴起镇。','base')],
    related:['/people/liu-zhidan','/people/xie-zichang','/people/xi-zhongxun','/museums/nanliang'], sources:[s.base,s.spirit],
  },
  {
    id:'huining', title:'长征会师', subtitle:'会宁与将台堡的历史坐标', region:'白银市', theme:'长征', priority:'important',
    summary:'会宁是三大主力红军会师过程中的重要坐标。按时间区分会宁与将台堡，才能看清多支部队在不同地点实现会合的经过。',
    visual:'plate_huining', composition:'confluence',
    sections:[
      section('会师以前','三大主力红军的战略转移各有行程。中央红军先到陕甘根据地，红二、红四方面军后来继续北上。在不同时间抵达西北后，各部之间的会合使分散的战略行动汇聚起来。会宁位于这一过程的重要节点，读者可以在原有时间长卷里沿哈达铺、榜罗镇等线索了解中央红军此前的北上经过。','base','reunion'),
      section('会宁：十月九日','1936年10月9日，红军总部和红四方面军总指挥部抵达会宁，与红一方面军部队会师。展陈中的“会宁会师”首先应明确这一天与参与部队的关系。次日，红一、红四方面军在会宁文庙前广场举行庆祝会师大会。到达会宁与庆祝大会分属两日，今天保留的纪念空间可以和这段时序一并阅读。','reunion'),
      section('将台堡：十月二十二日','随后，红二方面军继续向会师地区推进。10月22日，红二方面军总指挥部及第2军团在将台堡与红一方面军主力会师。将台堡今属宁夏西吉县。把这一步与此前的会宁会合放在同一条时间线上，能够理解三大主力胜利会师为何涉及多个地点和日期。','reunion'),
      section('会师为何重要','各路主力在西北会合，使长途战略转移告一段落，并为此后的革命斗争和抗日活动积聚力量。参观会宁纪念场馆时，可将旧址中的建筑与陈列分别对应到会师活动和后来的纪念实践。','reunion'),
    ],
    timeline:[
      time('1935.10','中央红军抵达吴起镇，在陕甘根据地落脚。','base'),
      time('1936.10.09','红军总部和红四方面军总指挥部抵达会宁，与红一方面军会师。','reunion'),
      time('1936.10.10','红一、红四方面军在会宁文庙举行庆祝会师活动。','reunion'),
      time('1936.10.20','红五军在会宁与通渭交界的华家岭一带开始阻击敌军。','dadunliang'),
      time('1936.10.22','红二方面军总指挥部及第2军团在将台堡与红一方面军主力会师。','reunion'),
      time('1936.10.23','红五军在会宁大墩梁继续阻击，副军长罗南辉在战斗中牺牲。','dadunliang'),
    ],
    related:['/museums/huining','/history/landing','/history/shanchengbao','/museums/huining-martyrs'], sources:[s.base,s.reunion,s.dadunliang],
  },
  {
    id:'west-route-army', title:'西路军魂', subtitle:'河西走廊的战斗与纪念', region:'张掖市', theme:'西路军', priority:'important',
    summary:'从西渡黄河到河西走廊，再到祁连山中的转移，按战事阶段阅读西路军在古浪、高台、临泽和梨园口的历史。',
    composition:'corridor',
    sections:[
      section('西渡黄河与战略变化','1936年10月，红四方面军总部和第五、第九、第三十军等部从甘肃靖远一带渡过黄河，原与宁夏战役计划相关。时局变化后，渡河部队组成西路军，转战河西走廊。渡河地点、编组和后续战事是三个层次，不能以单一战斗概括全过程。','west'),
      section('走廊东段：古浪与山丹','在进入张掖一带以前，部队已在古浪、永昌等地连续作战。张掖市史志办记录了红五军在山丹攻守的经过，其中包括城外据点争夺和后来的撤离。由东往西读这些地名，有助于理解各部连续作战与补给困难如何在走廊地形中叠加。','west'),
      section('高台与临泽：彼此牵连的战场','1937年元旦，董振堂、杨克明率红五军一部占领高台县城。敌军进攻时切断高台与临泽之间的联系，牵制附近部队。1月20日高台失守，董振堂、杨克明等牺牲。此后临泽方向部队突围，西路军又在倪家营一带作战。高台的守城与临泽的转移应分别考察。','west'),
      section('梨园口与石窝会议','3月12日，西路军在梨园口阻击追兵并掩护总部进山，红九军政委陈海松等牺牲。余部进入祁连山区后，3月14日的石窝会议决定分散开展游击斗争，并安排有关人员向中央报告。进入祁连山之后，各部去向不同，不能把后续历史简化为一个统一的终点。','west'),
      section('从地名回到人物与纪念设施','高台纪念设施、临泽和梨园口相关遗址分别对应不同战事。在场馆与人物档案之间往返，可以把战斗经过同亲历者、牺牲者及后来的纪念联系起来。本文按可核对的地点、时间和人物组织，伤亡及各级干部名录另待逐项比对。','west'),
    ],
    timeline:[time('1936.10','红四方面军部分部队由靖远一带西渡黄河。','west'),time('1937.01','红五军占领高台，随后经历守城战。','west'),time('1937.03.12','梨园口阻击，余部向祁连山区转移。','west'),time('1937.03.14','石窝会议安排余部分散行动。','west')],
    related:['/people/dong-zhentang','/people/yang-keming','/people/chen-haisong','/museums/gaotai','/museums/gulang','/museums/linze','/museums/liyuankou'],sources:[s.west],
  },
  {
    id:'landing',title:'长征入甘与落脚决策',subtitle:'俄界 · 哈达铺 · 榜罗镇',region:'陇南市',theme:'长征',priority:'secondary',visual:'plate_hadapu',
    summary:'按地点区分继续北上的方针、在哈达铺获得的陕北线索与榜罗镇的战略决定。',
    sections:[
      section('俄界会议','1935年9月，中央在俄界召开会议，讨论部队面临的局势及今后的行动方针。继续北上的选择提供了理解此后行程的起点。','ejie'),
      section('哈达铺：休整与消息','红军分批进入哈达铺并进行休整。报纸提供了陕北红军和根据地仍在活动的信息，成为选择落脚地区时的重要线索。来源对先头部队、各部及中央机关到达时间的表述对象不同，正文采用月份。','gan','hadapu'),
      section('榜罗镇会议','1935年9月27日陕甘支队抵达榜罗镇。中央在当地进一步明确保卫和扩大陕北苏区、以陕北作为长征落脚地的方向。将榜罗镇会议和哈达铺的信息获得分开，可以清楚看到从形势判断到战略决定的过程。','bangluo','gan'),
    ], related:['/museums/ejie','/museums/bangluo','/museums/hadapu','/history/lazikou','/history/huining'],sources:[s.ejie,s.gan,s.hadapu,s.bangluo],
  },
  {
    id:'lazikou',title:'腊子口战役',subtitle:'从峡谷打开北上通道',region:'甘南藏族自治州',theme:'长征',priority:'secondary',
    summary:'地势与兵力展开方式决定了这场隘口攻坚的难点。正面作战与侧背穿插共同构成突破过程。',
    sections:[
      section('峡谷中的阻击','1935年9月，红军北上行至甘肃南部的腊子口。山崖与狭窄通道限制了正面兵力展开，守军利用险要地形阻击。','gan'),
      section('由正面强攻到侧背穿插','盐田区档案史志资料正文按9月16日抵达与正面作战、次日穿插击溃守军的顺序叙述，本文用9月16日至17日表示战斗过程。突破隘口后，红军进入甘南较开阔地带，随后向哈达铺推进。','gan'),
    ],related:['/museums/lazikou','/history/landing'],sources:[s.gan],
  },
  {
    id:'lanzhou-resistance',title:'抗战时期的甘肃',subtitle:'八路军兰州办事处与中共甘肃工委',region:'兰州市',theme:'抗战',priority:'reference',
    summary:'从办事处旧址阅读抗战时期的联络、物资运输、青年输送和地方工作。',
    sections:[section('西北国际交通线','八路军兰州办事处承担转运抗战物资、与有关方面联系和输送进步青年到延安等工作。地方党组织工作与办事处有联系，文旅部转载资料明确记载办事处指导中共甘肃工委开展工作。','office'),section('历史机构与当代展陈','旧址今天由纪念馆开展保护、展览和教育工作。参观时可将国际交通线的展览内容与办事处日常联络任务对照阅读。办事处设立日期存在不同表述，本篇暂不写入精确日期。','office')],related:['/museums/lanzhou-office'],sources:[s.office],
  },
  {
    id:'lanzhou-battle',title:'兰州战役',subtitle:'第一野战军攻坚与兰州解放',region:'兰州市',theme:'解放战争',priority:'reference',
    summary:'1949年8月，第一野战军展开兰州城市攻坚。山地阵地和黄河交通节点构成理解战役的两条线索。',
    sections:[section('城市攻坚','第一野战军的攻势既面对南部山地防线，也需控制城区交通。8月25日发起总攻后，各部相继突破阵地，向城内推进。','lanzhou'),section('从合围到解放','8月20日，解放军完成对兰州的合围。8月25日发起总攻，次日兰州解放，兰州军管会成立。展馆把战斗与其后的接管分开记述，以便读者区分军事攻坚和城市秩序恢复两个阶段。','lanzhou')],sources:[s.lanzhou],
  },
  {
    id:'shanchengbao',title:'山城堡战役',subtitle:'会师后的协同作战',region:'庆阳市',theme:'长征',priority:'reference',
    summary:'1936年11月，红军在山城堡一带迎击来敌，三大主力会师后的协同在此得到体现。',
    sections:[section('会师以后','三大主力会师之后，进攻根据地的军事压力仍在。红军选择在甘肃环县山城堡一带组织作战，以地形与部队协同应对来敌。','shan'),section('战役的历史位置','山城堡战斗发生在会宁、将台堡会合之后。读者可以把它与此前会师以及根据地的巩固联系起来，同时分别理解会师与战斗各自的时间和作用。','shan')],related:['/history/huining','/history/nanliang','/museums/shanchengbao'],sources:[s.shan],
  },
  {
    id:'sparks',title:'陇原星火',subtitle:'从太白、两当到靖远',region:'甘肃',theme:'早期革命',priority:'secondary',
    summary:'以三次有史料支持的行动，观察陕甘地区早期革命武装怎样筹建、改编和尝试会合。',
    sections:[
      section('太白收枪','1930年秋，刘志丹等在太白组织夺取当地民团武器。行动开始前已有人员侦察当地布防，所得武器为日后组织南梁革命武装提供了条件。','spark'),
      section('两当兵变','1932年4月，地下党组织利用部队换防的机会发动兵变，参加起义的人员随后改编为陕甘游击队第五支队，并尝试向陕甘边革命活动区域推进。党史资料把行动与此前的兵运组织工作联系起来。','spark','liangdang'),
      section('靖远起义','1932年5月，谢子长、焦维炽等筹划的兵变在靖远发动。参与人员在打拉池一带集合并改编。第一次兵变失利后，组织者继续筹集武器、重组游击力量。阅读靖远史事需要区分多次行动，不能将不同阶段合为一次。','spark'),
    ],
    related:['/history/nanliang','/museums/liangdang','/people/liu-zhidan','/people/xie-zichang'],sources:[s.spark,s.liangdang],
  },
];
