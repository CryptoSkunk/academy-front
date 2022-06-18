import request from '@/utils/request'

export default {
    //分页查询讲师
    getPageList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'get'
        })
    },
    //讲师详情页面
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    }
}