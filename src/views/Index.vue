<template>
<div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="card border-0 rounded shadow">
                <div class="card-body">
                    <h4>Data User</h4>
                    <hr>
                    <router-link :to="{name : 'create'}" class="btn btn-md btn-success">Tambah</router-link>
                        <table class="table table=striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Jenis Kelamin</th>
                                    <th scope="col">Agama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.jk }}</td>
                                    <td>{{ user.agama }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name : 'edit', params:{id: user.id}}" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                                        <button @click.prevent="postDelete(user.id)" class="btn btn-sm btn-danger mr-1">Hapus</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { onMounted, ref} from 'vue'

export default {
    setup() {
        let users = ref([])
        onMounted(() => {
            axios.get('http://localhost:8000/api/users')
            .then(response => {
                users.value = response.data.data
            })
            .catch(error => {
                console.log(error.response.data)
            })
        })
        let posts = ref([])
        function postDelete(id) {
            axios
            .delete(`http://localhost:8000/api/users/${id}`)
            .then((response)=>{
                alert("Data akun anda berhasil dihapus!!!");
                    if(response.data.success == true){
                        delete posts.value[id];
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
            }
        return {
            users,
            postDelete
        }
    }
}
</script>
<style>
body{
    background: lightgray;
}
</style>