const moment = require('moment-timezone');

const menu = (prefix, pushname) => {

 var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"

 let p = 0

 return ` *sh¡ro-BOT*

Good ${salam} ${pushname},Semoga harimu Suram :)

┏━┃
┃❏ *Name* : sh¡ro
┃❏ *Total commands* : 137
┃❏ *Owner* : @${configs.ownerList[0].split('@')[0]}
┃❏ *Prefix* : *#*
┃❏ *Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')}
┃❏ *Type* : Node.Js
┃❏ *Limit* : 15 /Account
┃❏ *sc size* : 36.9 MB
┗━┃

[ *sh¡ro* ] 
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

*＞ GROUP ONLY*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}group _open|close_
    ┃${prefix}antilink _on|off_
    ┃${prefix}antitagall _on|off_
    ┃${prefix}antiviewonce _on|off_
    ┃${prefix}welcome _on|off_
    ┃${prefix}leave _on|off_
    ┃${prefix}setgroupicon _replyImage_
    ┃${prefix}setgroupname _text_
    ┃${prefix}setgroupdesc _text_
    ┃${prefix}hidetag _text_
    ┃${prefix}promote _@tag_
    ┃${prefix}demote _@tag_
    ┃${prefix}kick _@tag_
    ┃${prefix}add _number_
    ┃${prefix}getpp _@tag_
    ┃${prefix}tagall
    ┃${prefix}linkgroup
    ┃${prefix}revoke
    ┃${prefix}leave
    ┃${prefix}afk _text_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ DOWNLOADER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}play _query_
    ┃${prefix}playvid _query_
    ┃${prefix}youtubedl _query_
    ┃${prefix}ytmp3 _link_
    ┃${prefix}ytmp4 _link_
    ┃${prefix}igstory _username_
    ┃${prefix}ig _link_
    ┃${prefix}joox _song_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ STICKER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}stickerwm _pack|author_
    ┃${prefix}takestick _pack|author_
    ┃${prefix}toimg _replySticker_
    ┃${prefix}togif _replySticker_
    ┃${prefix}semoji _emoji_
    ┃${prefix}stickerfire
    ┃${prefix}stickernobg
    ┃${prefix}stickergif
    ┃${prefix}sticker
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ ANIME*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}anime _query_
    ┃${prefix}manga _query_
    ┃${prefix}chara _query_
    ┃${prefix}waifu
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ EDUCATION*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}nulis _text_
    ┃${prefix}brainly _query_
    ┃${prefix}kbbi _query_
    ┃${prefix}wiki _query_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ SEARCHING*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}playstore _apk_
    ┃${prefix}happymod _apk_
    ┃${prefix}iguser _username_
    ┃${prefix}igstalk _username_
    ┃${prefix}ytsearch _query_
    ┃${prefix}ytplaylist _query_
    ┃${prefix}ytchannel _channel_
    ┃${prefix}shoope _product_
    ┃${prefix}spotify _song_
    ┃${prefix}gsmarena _hp_
    ┃${prefix}searchmusic _replyAudio_
    ┃${prefix}wallpaper _query_
    ┃${prefix}pinterest _query_
    ┃${prefix}googleimage _query_
    ┃${prefix}jagokata _kata_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ PRIMBON*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}jodoh _kamu|dia_
    ┃${prefix}artinama _nama_
    ┃${prefix}artimimpi _mimpi_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ RANDOM*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}fml
    ┃${prefix}randomquran
    ┃${prefix}meme
    ┃${prefix}darkjoke
    ┃${prefix}pantun
    ┃${prefix}nickepep
    ┃${prefix}quotes
    ┃${prefix}estetikpic
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ TEXTMAKER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}wolflogo _text1|text2_
    ┃${prefix}logoaveng _text1|text2_
    ┃${prefix}phlogo _text1|text2_
    ┃${prefix}marvellogo _text1|text2_
    ┃${prefix}gtext _text1|text2_
    ┃${prefix}pubglogo _text1|text2_
    ┃${prefix}snowwrite _text1|text2_
    ┃${prefix}watercolour _text1|text2_
    ┃${prefix}harta _text_
    ┃${prefix}thundertext _text_
    ┃${prefix}flametext _text_
    ┃${prefix}glowtext _text_
    ┃${prefix}smoketext _text_
    ┃${prefix}lithgtext _text_
    ┃${prefix}flowertext _text_
    ┃${prefix}bneon _text_
    ┃${prefix}matrix _text_
    ┃${prefix}breakwall _text_
    ┃${prefix}gneon _text_
    ┃${prefix}dropwater _text_
    ┃${prefix}tfire _text_
    ┃${prefix}sandw _text_
    ┃${prefix}epep _text_
    ┃${prefix}gplaybutton _text_
    ┃${prefix}splaybutton _text_
    ┃${prefix}text3dbox _text_
    ┃${prefix}text3d _text_
    ┃${prefix}logobp _text_
    ┃${prefix}leavest _text_
    ┃${prefix}tlight _text_
    ┃${prefix}naruto _text_
    ┃${prefix}crosslogo _text_
    ┃${prefix}cslogo _text_
    ┃${prefix}crismes _text_
┗━━━━━━━━━━━━━━━━━━━━━━━━━

*＞ IMAGEMAKER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}missing _text1|text2|text3|@tag_
    ┃${prefix}calender _replyImage / @tag_
    ┃${prefix}drawing _replyImage / @tag_
    ┃${prefix}sketch _replyImage / @tag_
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ OTHER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}tomp3 _replyVideo_
    ┃${prefix}removebg _replyImage_ */* _@tag_
    ┃${prefix}tts _code|text_
    ┃${prefix}qrencode _text_
    ┃${prefix}barcode _text_
    ┃${prefix}jadwalsholat _daerah_
    ┃${prefix}jadwaltv _channel_
    ┃${prefix}tebakgambar
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ INFO*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}stickermenu
    ┃${prefix}owner
    ┃${prefix}limit
    ┃${prefix}info
    ┃${prefix}listvn
┗━━━━━━━━━━━━━━━━━━━━━━━━

*＞ OWNER*
┏━━━━━━━━━━━━━━━━━━━━━━━━
    ┃${prefix}setpp _replyImage_
    ┃${prefix}eval _text_
    ┃${prefix}term _code_
    ┃${prefix}block _@tag_
    ┃${prefix}unblock _@tag_
    ┃${prefix}join _link_
    ┃${prefix}bc _text_
    ┃${prefix}addvn _replyAudio/vn_
    ┃${prefix}delvn _name_
    ┃${prefix}premium add _@tag_
    ┃${prefix}premium del _@tag_
    ┃${prefix}premium list
    ┃${prefix}clearall
    ┃${prefix}resetlimit
    ┃${prefix}self
    ┃${prefix}public
┗━━━━━━━━━━━━━━━━━━━━━━━━
`

}

const ingfo = `
sh¡ro Bot 
┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃Owner: Satrio 〽️                                                     
     ┃Nomor: +628983755600
     ┃                    
     ┃Owner 2: sh¡ro 〽️  
     ┃Nomor: +62895622982832  
┗━━━━━━━━━━━━━━━━━━━━━━━━                                                          

 *ᗒ* Donasi | Pulsa
┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃+628983755600  | 3
     ┃+62895622982832  | 3
┗━━━━━━━━━━━━━━━━━━━━━━━━                                                                                                                                              

 *ᗒ* Discord Server

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://discord.gg/YzpFy77yB7
┗━━━━━━━━━━━━━━━━━━━━━━━━                                                                                                                                                        

 *ᗒ* Instagram

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://instagram.com/22.1447?utm_medium=copy_link
┗━━━━━━━━━━━━━━━━━━━━━━━━

*ᗒ* Twitter

┏━━━━━━━━━━━━━━━━━━━━━━━━
     ┃https://twitter.com/22_1447
┗━━━━━━━━━━━━━━━━━━━━━━━━
*@ sh¡ro┃Development┃Total 137 commands*
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {

             wait: 'Tunggu sebentar yaa',

    group: 'perintah ini hanya dapat di gunakan di dalam groups!',

    admin: 'hanya dapat di gunakan oleh admin!',

    botAdmin: 'perintah ini hanya dapat digunakan jika bot adalah grup admin',

    limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',

    ownerOnly: '⚠️ perintah ini hanya bisa di gunakan oleh owner!'

}

module.exports = {

 menu,

 ingfo,

 listCode,

 mess

}
