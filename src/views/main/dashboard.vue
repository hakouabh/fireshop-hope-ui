<template>
  <div class="row">
      <div class="col-md-12 col-lg-12">
         <div class="row row-cols-1">
            <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
               <Swiper  id="swiper-wrapper-bb5b4e5553f7a9a4" aria-live="polite" :options="newoptions">
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-01" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="90" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90">
                              <svg class="card-slie-arrow " width="24" height="24px" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                              </svg>
                              <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 1 1 22.96187839454623 12.785218258752423" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">90%</text>
                              </svg>
                           </div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.revenus')}}</p>
                              <h5 class="counter" style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.revenue)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-next" data-aos="fade-up" data-aos-delay="800" role="group" aria-label="2 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-02" class="circle-progress-01 circle-progress circle-progress-info text-center" data-min-value="0" data-max-value="100" data-value="80" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80">
                              <svg class="card-slie-arrow " width="24" height="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                              </svg>
                              <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 1 1 6.25140025042294 35.78521825875241" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">80%</text>
                              </svg>
                           </div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.profit')}}</p>
                              <h5 class="counter" style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.profit)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="900" role="group" aria-label="3 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-03" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="70" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
                              <svg class="card-slie-arrow " width="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 1 1 6.25140025042294 64.2147817412476" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">70%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.cost')}}</p>
                              <h5 style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.cost)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1000" role="group" aria-label="4 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-04" class="circle-progress-01 circle-progress circle-progress-info text-center" data-min-value="0" data-max-value="100" data-value="60" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
                              <svg class="card-slie-arrow " width="24px" height="24px" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                              </svg>
                              <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 1 1 22.96187839454624 87.21478174124758" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">60%</text></svg>
                           </div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.total_charge')}}</p>
                              <h5  style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.charges)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1100" role="group" aria-label="5 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-05" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="50" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                              <svg class="card-slie-arrow " width="24px" height="24px" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 50 96" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">50%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.discount')}}</p>
                              <h5 style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.discount)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1200" role="group" aria-label="6 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-06" class="circle-progress-01 circle-progress circle-progress-info text-center" data-min-value="0" data-max-value="100" data-value="40" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40">
                              <svg class="card-slie-arrow " width="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 77.03812160545377 87.21478174124758" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">40%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.total_profit')}}</p>
                              <h5 style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.total_profit)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1200" role="group" aria-label="6 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-06" class="circle-progress-01 circle-progress circle-progress-info text-center" data-min-value="0" data-max-value="100" data-value="40" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40">
                              <svg class="card-slie-arrow " width="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 77.03812160545377 87.21478174124758" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">40%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.total_cost')}}</p>
                              <h5 style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.total_cost)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1300" role="group" aria-label="7 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-07" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="30" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30">
                              <svg class="card-slie-arrow " width="24" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 93.74859974957707 64.21478174124758" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">30%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">{{$t('dashboardVue.cost_stock')}}</p>
                              <h5  style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(stats.cost_stock)'/> {{$t('currency')}}</h5>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <template v-slot:nav>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                  </template>
               </Swiper>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
         </div>
      </div>
  <div class="row">
      <div class="col-md-12 col-lg-12">
         <div class="row row-cols-1">
            <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
               <Swiper  id="swiper-wrapper-bb5b4e5553f7a9a4" aria-live="polite" :options="newoptions">
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 280px; margin-right: 50px;">
                        <div class="card-body">
                           <div class="d-flex justify-content-between align-itmes-center">
                              <div>
                                 <div class="p-3 rounded bg-soft-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                 </div>
                              </div>
                              <div>
                                 <h2 class="text-primary counter" style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(total_customer)'/></h2>
                              <p class="text-primary mb-0">{{$t('dashboardVue.total_customer')}}</p>
                              </div>
                           </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 280px; margin-right: 50px;">
                     <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                           <div class=" bg-soft-success rounded p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path fill="none" d="M9.941,4.515h1.671v1.671c0,0.231,0.187,0.417,0.417,0.417s0.418-0.187,0.418-0.417V4.515h1.672c0.229,0,0.417-0.187,0.417-0.418c0-0.23-0.188-0.417-0.417-0.417h-1.672V2.009c0-0.23-0.188-0.418-0.418-0.418s-0.417,0.188-0.417,0.418V3.68H9.941c-0.231,0-0.418,0.187-0.418,0.417C9.522,4.329,9.71,4.515,9.941,4.515 M17.445,15.479h0.003l1.672-7.52l-0.009-0.002c0.009-0.032,0.021-0.064,0.021-0.099c0-0.231-0.188-0.417-0.418-0.417H5.319L4.727,5.231L4.721,5.232C4.669,5.061,4.516,4.933,4.327,4.933H1.167c-0.23,0-0.418,0.188-0.418,0.417c0,0.231,0.188,0.418,0.418,0.418h2.839l2.609,9.729h0c0.036,0.118,0.122,0.214,0.233,0.263c-0.156,0.254-0.25,0.551-0.25,0.871c0,0.923,0.748,1.671,1.67,1.671c0.923,0,1.672-0.748,1.672-1.671c0-0.307-0.088-0.589-0.231-0.836h4.641c-0.144,0.247-0.231,0.529-0.231,0.836c0,0.923,0.747,1.671,1.671,1.671c0.922,0,1.671-0.748,1.671-1.671c0-0.32-0.095-0.617-0.252-0.871C17.327,15.709,17.414,15.604,17.445,15.479 M15.745,8.275h2.448l-0.371,1.672h-2.262L15.745,8.275z M5.543,8.275h2.77L8.5,9.947H5.992L5.543,8.275z M6.664,12.453l-0.448-1.671h2.375l0.187,1.671H6.664z M6.888,13.289h1.982l0.186,1.671h-1.72L6.888,13.289zM8.269,17.466c-0.461,0-0.835-0.374-0.835-0.835s0.374-0.836,0.835-0.836c0.462,0,0.836,0.375,0.836,0.836S8.731,17.466,8.269,17.466 M11.612,14.96H9.896l-0.186-1.671h1.901V14.96z M11.612,12.453H9.619l-0.186-1.671h2.18V12.453zM11.612,9.947H9.34L9.154,8.275h2.458V9.947z M14.162,14.96h-1.715v-1.671h1.9L14.162,14.96z M14.441,12.453h-1.994v-1.671h2.18L14.441,12.453z M14.72,9.947h-2.272V8.275h2.458L14.72,9.947z M15.79,17.466c-0.462,0-0.836-0.374-0.836-0.835s0.374-0.836,0.836-0.836c0.461,0,0.835,0.375,0.835,0.836S16.251,17.466,15.79,17.466 M16.708,14.96h-1.705l0.186-1.671h1.891L16.708,14.96z M15.281,12.453l0.187-1.671h2.169l-0.372,1.671H15.281z"></path>
                              </svg>
                           </div>
                           <div>
                                 <h2 class="text-success counter" style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(total_operations)'/></h2>
                              <p class="text-success mb-0">{{$t('dashboardVue.total_operation')}}</p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 280px; margin-right: 50px;">
                        <div class="card-body">
                           <div class="d-flex align-items-center justify-content-between">
                              <div class=" bg-soft-info rounded p-3">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="none" viewBox="0 0 20 24" stroke="currentColor">
                                    <path fill="none" d="M17.696,9.368H2.305c-0.189,0-0.367,0.092-0.478,0.245c-0.11,0.155-0.141,0.352-0.08,0.532l2.334,6.918c0.081,0.238,0.305,0.4,0.556,0.4h10.735c0.253,0,0.478-0.162,0.557-0.402l2.323-6.917c0.062-0.179,0.03-0.376-0.079-0.531C18.062,9.459,17.886,9.368,17.696,9.368z M14.95,16.287H5.062l-1.938-5.743h13.753L14.95,16.287z"></path>
                                    <path fill="none" d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"></path>
                                 </svg>
                              </div>
                              <div>
                                 <h2 class="text-info counter" style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='(total_products)'/></h2>
                                 <p class="text-info mb-0">{{$t('dashboardVue.total_product')}}</p>
                              </div>
                           </div>
                        </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   </div>
      <div class="col-md-12 col-lg-12">
         <div class="row">
            <div class="col-md-12">
               <iq-card headerClass="flex-wrap" data-aos="fade-up" data-aos-delay="800">
                  <template v-slot:headerTitle>
                        <h4 class="card-title">{{gross_salle}} {{$t('currency')}}</h4>
                        <p class="mb-0">{{$t('dashboardVue.gross_salle')}}</p>
                  </template>
                  <template v-slot:headerContent>
                     <div class="d-flex align-items-center align-self-center">
                        <div class="d-flex align-items-center text-primary">
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                              <g>
                                 <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                              </g>
                           </svg>
                           <div class="ms-2">
                              <span class="text-secondary">{{$t('dashboardVue.this_week')}}</span>
                           </div>
                        </div>
                        <div class="d-flex align-items-center ms-3 text-info">
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                              <g>
                                 <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                              </g>
                           </svg>
                           <div class="ms-2">
                              <span class="text-secondary">{{$t('dashboardVue.last_week')}}</span>
                           </div>
                        </div>
                     </div>
                  </template>
                  <template v-slot:body>
                     <ApexChart element="d-main" :chartOption="dmain" />
                  </template>
               </iq-card>
            </div>
            <div class="col-md-12 col-xl-12">
               <div class="card" data-aos="fade-up" data-aos-delay="1200">
                  <div class="card-header d-flex justify-content-between flex-wrap">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('dashboardVue.operations')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <ApexChart element="dactivity1" :chartOption="dactivity1"/>
                  </div>
               </div>
            </div>
            <div class="col-md-12 col-lg-12">
               <iq-card bodyClass="p-0" headerClass="flex-wrap"  data-aos="fade-up" data-aos-delay="400">
                  <template v-slot:headerTitle>
                        <h4 class="card-title mb-2">{{$t('top_product')}}</h4>
                  </template>
                  <template v-slot:body>
                     <div class="table-responsive mt-4">
                        <table id="basic-table" class="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                                 <th>{{$t('dashboardVue.feilds.product_name')}}</th>
                                 <th>{{$t('dashboardVue.feilds.operation')}}</th>
                                 <th>{{$t('dashboardVue.feilds.sold')}}</th>
                                 <th>{{$t('dashboardVue.feilds.stock')}}</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr v-for="product in products" :key="product.id">
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <h6>{{product.name}}</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <h6>{{product.orders}}</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <h6>{{product.sold}}</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <h6>{{product.stock}}</h6>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </template>
               </iq-card>
            </div>
         </div>
      </div>
</div>
</template>
<script>
/* eslint-disable no-undef */
import iqCard from '@/components/bootstrap/Cards/iq-card.vue'
import ApexChart from '@/components/custom/charts/ApexChart'
import Swiper from '@/components/custom/slider/Swiper'
import Vue3autocounter from 'vue3-autocounter'
import SwiperSlide from '@/components/custom/slider/SwiperSlide'
import AOS from '@/plugins/aos/dist/aos.js'
export default {
  name: 'dashboard',
  components: {
    iqCard,
    ApexChart,
    Swiper,
    Vue3autocounter,
    SwiperSlide
  },
  mounted () {
    if (typeof AOS !== typeof undefined) {
      AOS.init({
        disable: function () {
          var maxWidth = 996
          return window.innerWidth < maxWidth
        },
        once: true,
        duration: 800
      })
    }
  },
  data () {
    return {
      products: {},
      total_products: 0,
      total_customer: 0,
      total_operations: 0,
      gross_salle: 0,
      stats: {},
      dmain: {
        series: [{
          name: this.$t('dashboardVue.this_week'),
          data: [0, 100, 200, 300, 400, 0, 0]
        }, {
          name: this.$t('dashboardVue.last_week'),
          data: [0, 100, 200, 300, 400, 0, 0]
        }],
        chart: {
          fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          height: 245,
          type: 'area',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: false
          }
        },
        colors: ['#3a57e8', '#4bc7d2'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            },
            offsetX: -5
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          labels: {
            minHeight: 22,
            maxHeight: 22,
            show: true,
            style: {
              colors: '#8A92A6'
            }
          },
          lines: {
            show: false // or just here to disable only x axis grids
          },
          categories: [this.$t('weeks.dimanche'), this.$t('weeks.lundi'),
            this.$t('weeks.mardi'), this.$t('weeks.mercredi'), this.$t('weeks.jeudi'), this.$t('weeks.vendredi'), this.$t('weeks.samedi')]
        },
        grid: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 50, 80],
            colors: ['#3a57e8', '#4bc7d2']
          }
        },
        tooltip: {
          enabled: true
        }
      },
      dactivity1: {
        series: [{
          name: this.$t('dashboardVue.this_week_operation'),
          data: [0, 0, 0, 0, 0, 0, 0]
        }, {
          name: this.$t('dashboardVue.last_week_operation'),
          data: [0, 0, 0, 0, 0, 0, 0]
        }],
        chart: {
          type: 'bar',
          height: 230,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#3a57e8', '#4bc7d2'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '28%',
            endingShape: 'rounded',
            borderRadius: 5
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [this.$t('weeks.dimanche'), this.$t('weeks.lundi'),
            this.$t('weeks.mardi'), this.$t('weeks.mercredi'), this.$t('weeks.jeudi'), this.$t('weeks.vendredi'), this.$t('weeks.samedi')],
          labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' operations'
            }
          }
        }
      },
      newoptions: {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay: false,
        spaceBetween: 32,
        breakpoints: {
          320: { slidesPerView: 1 },
          550: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
          1920: { slidesPerView: 6 },
          2040: { slidesPerView: 7 },
          2440: { slidesPerView: 8 }
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  },
  created () {
    this.topProducts()
    this.getStats()
  },
  methods: {
    topProducts () {
      webServices.get('/stats/top/products', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.products = res.data.data
        })
    },
    getStats () {
      webServices.get('/operations/stats', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.stats = res.data.data.stats
          this.total_products = res.data.data.products
          this.total_customer = res.data.data.customers
          this.total_operations = res.data.data.orders
          this.gross_salle = res.data.data.gross_salle
          this.dmain.series[0].data = res.data.data.graph.current
          this.dmain.series[1].data = res.data.data.graph.last
          this.dactivity1.series[0].data = res.data.data.graphoperation.current
          this.dactivity1.series[1].data = res.data.data.graphoperation.last
        })
    }
  }
}
</script>
