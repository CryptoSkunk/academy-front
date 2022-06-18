import request from '@/utils/request'

export default {
    //条件查询带分页查询课程
    getCourseList(page, limit, searchObj) {
        return request({
            url: `/eduservice/coursefront/getCourseListInfo/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    //查询所有分类的方法
    getAllSubject() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get'
        })
    },
    getCourseInfo(id){
        return request({
            url: `/eduservice/coursefront/getCourseInfoForFront/${id}`,
            method: 'get'
        })
    }
}