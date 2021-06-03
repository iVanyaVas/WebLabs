<template>
  <div class="container-fluid" id="testBox">
    <div class="row justify-content-start mt-5">
      <div class="col-12 col-md-5 col-lg-4 mt-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Food</h5>
            <p class="card-text">
              Let`s start learning basic words about food topic.
            </p>
            <router-link
              :to="{ name: 'test', params: { title: 'Food' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 col-lg-4 mt-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Home</h5>
            <p class="card-text">
              Let`s start learning basic words about home topic.
            </p>
            <router-link
              :to="{ name: 'test', params: { title: 'Home' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 col-lg-4 mt-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-mom-cubs.adapt.470.1.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Animals</h5>
            <p class="card-text">
              Let`s start learning basic words about animals.
            </p>
            <router-link
              :to="{ name: 'test', params: { title: 'Animals' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-start mt-5 mb-5">
      <div class="col-12 col-md-5 col-lg-4 mt-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://lh6.googleusercontent.com/4FNvPCtwGSKRJwT-Dz8x8ZGTXEmo1WjmKUh7oIbmqyOcjDcGP-zNPWI2Y8LAQdNEGtJ6l1zUCeMXI4ax2ZB0qu-PCVVFzgFrFvImBxmdVR1-wmMnN-NG7MCcp8Euj_BVDOhJFLQM"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">City</h5>
            <p class="card-text">
              Let`s start learning basic words about city.
            </p>
            <router-link
              :to="{ name: 'test', params: { title: 'City' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 col-lg-4 mt-5 mb-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://pic.sport.ua/images/news/0/10/106/orig_421395.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Sport</h5>
            <p class="card-text">
              Let`s start learning basic words about sports.
            </p>
            <router-link
              :to="{ name: test, params: { title: 'Sport' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 col-lg-4 mt-5 mb-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="http://previews.123rf.com/images/andegro4ka/andegro4ka1605/andegro4ka160500001/56713895-hobby-icons-detailed-photo-realistic-set.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Hobby</h5>
            <p class="card-text">
              Let`s start learning basic words about hobbies.
            </p>
            <router-link
              :to="{ name: 'test', params: { title: 'Hobby' } }"
              class="btn btn-primary startTest"
              data-id="Hobby"
            >
              Let`s start
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2" src="eng-1.svg" alt="" width="64" height="64" />
          <small class="d-block mb-3 text-muted">&copy; 2021-2021</small>
        </div>
        <div class="col-6 col-md">
          <li><a class="text-muted" href="info.html">About us</a></li>
        </div>
        <div class="col-6 col-md">
          <a class="text-muted">&copy;All rights reserved</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
