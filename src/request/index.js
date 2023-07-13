// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
	baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
const ipData = axios.create({
	baseURL: 'http://ip-api.com/json',
});
//添加请求拦截器
http.interceptors.request.use(function (config) {
	const cookie = store.get("__m__cookie") ?? ""
	config.params = config.params || {}
	config.params.cookie = cookie
	return config
})
export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchPlaylists = (cat) =>
	http.get('/top/playlist', { params: { cat } });

/**
 * @description 获取默认搜索关键词
 */
export const fetchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) => http.get('/search', { params });

export const fetchSearchSuggest = (keywords) =>
	http.get('/search/suggest', { params: { keywords } });

export const fetchHomeData = () => http.get('/homepage/block/page');

export const getQrKey = () => http.get('/login/qr/key');

export const getQrInfo = (key, qrimg = 1) =>
	http.get('/login/qr/create', {
		params: { key, qrimg }
	});

export const checkQrStatus = (key) =>
	http.get('/login/qr/check', { params: { key, timestamp: Date.now } });

export const getUserAccount = () => {
	http.get('/user/account')
}

export const getUserDetail = () => http.get('/user/detail', { params: { uid } })

/**
* @descriptiong 获取账户信息
*/
export const fetchUserAccount = () => http.get('/user/account')

export const fetchUserSubcount = () => http.get('/user/subcount')

export const fetchUserLevel = () => http.get('/user/level')


//退出登录
export const logout = () => http.get('/logout')

//登录详情
export const loginStatus = () => http.get('/login/status')

//获取用户信息 , 歌单，收藏，mv, dj 数量
export const userSubcount = () => http.get('/user/subcount')

//获取用户等级
export const userLevel = () => http.get('/user/level')

//获取用户关注
export const userGuanZhu = (params) => http.get(`/user/follows?uid=${params}`)

//获取用户粉丝
export const userFolloweds = (params) => http.get(`/user/followeds?uid=${params}`)

//获取用户动态
export const userEvent = (params) => http.get(`/user/event?uid=${params}`)

//获取实际地址
export const myIP = (params) => ipData.get(`/${params}`)

//获取用户详情
export const userDetail = (params) => http.get(`/user/detail?uid=${params}`)

/**
* @descriptiong 获取账户信息
*/
export const fetchUserDetail = (uid) => http.get('/user/detail', { params: { uid } });

/**
* @descriptiong 获取用户歌单
*/
export const fetchUserPlaylist = (uid) => http.get('/user/playlist', { params: { uid } });

/**
* @descriptiong 获取用户评论
*/
export const fetchUserHistory = (uid) => http.get('/user/comment/history', { params: { uid } });
/**
* @descriptiong 转发的动态
*/
export const fetchUserdynamics = (uid) => http.get('/user/event/forward', { params: { uid } });

/**
* @descriptiong 播客/电台
*/
export const fetchdj = (uid) => http.get('/user/subcount', { params: { uid } });

export async function fetchToplistDetail() {
	const res = await http.get('/toplist/detail');
	const playlist = await Promise.all(
		res.data.list.map(({ id }) => http.get('playlist/detail',
			{
				params: { id }
			})));
	return playlist.map(item => item.data.playlist)
}

/**
* @description 搜索
*/
export const fetchCloudsearch = (keywords) => http.get('/cloudsearch', {
	params: { keywords },
});

/**
* @description 播放器
*/
export const getMP3 = (id) =>
	http.get(`/song/url/v1`, { params: { id, level: 'standard' } })

export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });

/**
* @description 重复昵称检测
*/
export const featNicknameCheck = (nickname) => http.get('/nickname/check', { params: { nickname } });


/**
* @description 更新用户信息
*/
export const fetchUserUpdata = (nickname, gender, province, city, birthday) => http.get('/user/update', {
	params: {
		nickname, // 用户昵称
		gender, // 性别 0:保密 1:男性 2:女性
		province, // 省份id
		city, // 城市id
		birthday, // 出生日期,时间戳 unix timestamp
	}
});

/**
* @descriptiong MV排行榜
*/
export const MVTop2 = () => http.get('top/mv');

export const MVTop = (area, limit = 50) => http.get('/top/mv', { params: { limit, area } })


