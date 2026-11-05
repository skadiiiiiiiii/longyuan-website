const research = {
 'liu-zhidan':{alt:'刘志丹历史照片，文件页标为1933年',source:'https://commons.wikimedia.org/wiki/File:Liu_Zhidan.jpg',width:300,height:411},
 'xi-zhongxun':{alt:'习仲勋历史照片，文件页标为1949年6月',source:'https://commons.wikimedia.org/wiki/File:Xzx1949.jpg',width:350,height:233},
};

export function personResearchPhoto(id){
 if(!['localhost','127.0.0.1','[::1]'].includes(window.location.hostname)||!__LOCAL_RESEARCH_PORTRAITS__.includes(id))return null;
 return {...research[id],path:'images/research/'+id+'.jpg',credit:'作者未详 / Wikimedia Commons',license:'PD-China 标注',processing:'本机研究预览'};
}
