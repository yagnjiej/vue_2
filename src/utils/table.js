// 获取表格数据
export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
            }
        })
        .catch(err => {
            throw err
        })
}

// 新增与修改方法封装
import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                callback(root, url)
                root.dialogFormVisible = false
                root.$message({ type: 'success', message: res.data.message })
            }
        })
        .catch(err => {
            throw err
        })
}

// 删除方法封装
export function delDate(root, url, id, callFun) {
    root.$alert('你确定删除吗？', '提示', {
        confirmButtonText: '确定',
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res => {
                if (res.data.status === 200) {
                    callFun(root, url)
                    root.$message({ type: 'success', message: res.data.message })
                }
            })

        }
    })
        .catch(err => {
            throw err
        })
}

// 作业列表获取方法
export function getTableData(root, url, params, arr) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
                root.tableData.map(item => {
                    arr.map(aItem => {
                        item[aItem] ? item[aItem + '_text'] = '完成'
                            : item[aItem + '_text'] = '未完成'
                    })
                })
                root.loading = false
            }
        })
        .catch(err => {
            throw err
        })
}