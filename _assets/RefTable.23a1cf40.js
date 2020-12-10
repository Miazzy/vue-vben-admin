import{a as e,r as t,h as i,f as o,i as s,o as n,j as a,k as c,w as l,n as r}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.ecccf93f.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import"./index.3d914ca4.js";import"./index.3926bcc0.js";import"./colors.7cad5419.js";import"./index.73d6b745.js";import"./RightOutlined.6271d6f8.js";import"./index.309c8c25.js";import"./types.19f6acce.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.de1b91a6.js";import"./index.2d1b8ed6.js";import"./UpOutlined.9fb79b46.js";import"./LeftOutlined.8cd70964.js";import"./DownOutlined.28064e9e.js";import"./index.34bfa216.js";import"./index.2ecb2e39.js";import"./index.561335a2.js";import"./zh_CN.0242bd16.js";import"./index.ae35b363.js";import"./index.257889b7.js";import"./CaretDownFilled.726f4c31.js";import"./CheckOutlined.ba687b5f.js";import"./CloseOutlined.11b614e0.js";import{s as d}from"./EditTableHeaderIcon.fdd93bfb.js";import"./index.6b4afdd3.js";import"./LeftOutlined.a0990950.js";import"./functional.d4e0e18b.js";import"./RightOutlined.1397f8a7.js";import"./useContext.114680ae.js";import"./useTimeout.0990510e.js";import"./useDebounce.9e3543c4.js";import"./useEventListener.c24bc5c8.js";import"./useBreakpoint.a0fed2b4.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import"./index.44bbd0bc.js";import"./index.bb2606ae.js";import"./useWindowSizeFn.bf57cf6c.js";import"./uuid.40269c00.js";import"./download.492c51b9.js";import"./useForm.648d9376.js";import"./useFullScreen.a870005d.js";import"./index.5387abc0.js";import{getBasicColumns as m,getBasicShortColumns as p}from"./tableData.90cd288f.js";import{d as u}from"./table.73c80eb2.js";var f=e({components:{BasicTable:d},setup(){const e=t(null),{createMessage:s}=i();function n(){const t=o(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:u,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(p())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const b={class:"p-4"},j={class:"mb-4"},C=r("还原"),g=r("开启loading"),k=r("更改Columns"),x=r("获取Columns"),w=r("获取表格数据"),R=r("跳转到第2页"),S={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),y=r("获取分页信息");f.render=function(e,t,i,o,r,d){const m=s("a-button"),p=s("BasicTable");return n(),a("div",b,[c("div",j,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[w])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[R])),_:1},8,["onClick"])]),c("div",S,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[L])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[T])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[h])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[y])),_:1},8,["onClick"])]),c(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default f;