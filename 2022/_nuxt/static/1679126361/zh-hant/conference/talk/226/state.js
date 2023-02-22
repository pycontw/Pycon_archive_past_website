window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2022\u002F_nuxt\u002Fstatic\u002F1679126361",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:226,begin_time:"2022-09-04T03:15:00Z",end_time:"2022-09-04T03:45:00Z",is_remote:false,location:"6-r2",youtube_id:b,title:"Big Models, Small Pitfalls: My random walk towards building sequence-to-sequence models",category:"NLP",language:"ENEN",python_level:"INTERMEDIATE",recording_policy:c,abstract:"From Googling for the reviews of that new deli place to watching Parasite with subtitles, sequence-to-sequence learning is behind a variety of applications - machine translation, speech recognition, chatbots etc.\r\n\r\nIn this talk, I share my experiences with modeling real-world messy data with attention-based transformer and CNN models - the good, the bad, and the ugly. I'll discuss some of the lessons that we learned through experimentation on sequence-to-sequence models - about architecture size, vocabulary, the relation between validation and training error, etc. Working in ML makes you realize one thing–it’s not always black and white and it doesn’t have to be a black box!\r\n\r\nThe process of building good NLP models is not a straight line. Not-so-little decisions can often require tons of experiments, but in this talk, I share my modeling experience and lessons learned so your walk isn't as random as mine was!",detailed_description:"I’ll start by discussing briefly how sequence (input) to sequence (output) deep learning architectures have evolved from RNNs to recent advancements in Transformer, BERT and GPT3. I’ll talk about the different applications of sequence to sequence learning, which will help the audience understand if it’s a good fit for their data. I'll discuss some results of hyperaparameter and data tuning that have been shown in the literature and are often used as starting points during modeling.\r\n\r\nData collection, data cleaning and pre-processing play a significant role in effectively solving any data science problems. Particularly, subwords and byte-pair processing have been immensely helpful in generalizing the task for rare words. `FastBPE`[1] and `subword NMT`[2] are two tools that are widely used for this purpose. I’ll show how small errors during subword preprocessing can lead to very different outputs and harm the prediction quality. \r\n\r\nI’ll also address the common questions we face as ML practitioners about the architecture, hyperparameters and training metrics. While research literature points to clear patterns of performance with data size and number of model parameters, real data is often messy and has its own set of nuances. I'll be sharing some lessons and tricks to help make practical modeling choices.\r\n\r\nSometimes, having enough labelled data is hard, and annotation is difficult. In these cases, models need to be trained with small datasets, which are often less representative. We discuss what approaches are viable in these cases.\r\n\r\nThis talk will help get NLP practitioners an understanding of some common modeling pitfalls and hopefully help develop a sense of what works better in practice. \r\n\r\n\r\n[1] https:\u002F\u002Fgithub.com\u002Fglample\u002FfastBPE\r\n[2] https:\u002F\u002Fgithub.com\u002Frsennrich\u002Fsubword-nmt",slide_link:"https:\u002F\u002Fgithub.com\u002FShreyaKhurana\u002FPyconAPAC22",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002FjfzDeYQ9auhfLV1U9uRRBN",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002Frkh-wTXyi",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F08\u002Fd4\u002F08d4a8c34830cd98d412931783f37703.jpg",name:"Shreya Khurana",github_profile_url:"https:\u002F\u002Fgithub.com\u002FShreyaKhurana",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002FShreyaKhurana16",facebook_profile_url:b,bio:"Hi, I'm a data scientist in the Domain Search team at GoDaddy which researches, develops, and deploys deep learning models for Godaddy’s domain business. I enjoy working with data in general and more specifically building NLP models. I'm a Python enthusiast and enjoy sharing my learnings with the community - I've previously presented at the Grace Hopper Conference, PyCon US, EuroPython and GeoPython."}],event_type:"talk"},relatedData:[],i18n:{routeParams:{}}},serverRendered:c,routePath:"\u002Fzh-hant\u002Fconference\u002Ftalk\u002F226",config:{gtm:{id:void 0},_app:{basePath:"\u002F2022\u002F",assetsPath:"\u002F2022\u002F_nuxt\u002F",cdnURL:a}}}}(null,"",true));