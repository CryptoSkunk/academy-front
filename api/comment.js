import request from '@/utils/request'

export default {

  getCourseCommentsPage(page, limit, courseId) {
    return request({
      url: `/eduservice/comment/getCourseComments/${courseId}/${page}/${limit}`,
      method: 'get',
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/comment/addCourseComment`,
      method: 'post',
      data: comment
    })
  }
}