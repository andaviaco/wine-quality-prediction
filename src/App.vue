<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="200px" size="mini">
          <el-form-item label="Fixed acidity">
            <el-slider
              v-model="form.fixedAcidity"
              :min="0"
              :max="16"
              :step="0.1"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Volatile acidity">
            <el-slider
              v-model="form.volatileAcidity"
              :min="0"
              :max="2"
              :step="0.01"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Citric acid">
            <el-slider
              v-model="form.citricAcid"
              :min="0"
              :max="1"
              :step="0.01"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Residual sugar">
            <el-slider
              v-model="form.residualSugar"
              :min="0"
              :max="16"
              :step="0.1"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Chlorides">
            <el-slider
              v-model="form.chlorides"
              :min="0"
              :max="1"
              :step="0.001"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Free sulfur dioxide">
            <el-slider
              v-model="form.freeSulfurDioxide"
              :min="0"
              :max="100"
              :step="1"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Total sulfur dioxide">
            <el-slider
              v-model="form.totalSulfurDioxide"
              :min="0"
              :max="300"
              :step="1"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Density">
            <el-slider
              v-model="form.density"
              :min="0.99"
              :max="1"
              :step="0.0001"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="PH">
            <el-slider
              v-model="form.ph"
              :min="0"
              :max="5"
              :step="0.01"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Sulphates">
            <el-slider
              v-model="form.sulphates"
              :min="0"
              :max="2"
              :step="0.01"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item label="Alcohol">
            <el-slider
              v-model="form.alcohol"
              :min="0"
              :max="18"
              :step="0.1"
              input-size="mini"
              show-input>
            </el-slider>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Calculate</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="12">
        <div>world</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      form: {
        fixedAcidity: 8.0,
        volatileAcidity: 0.5,
        citricAcid: 0.2,
        residualSugar: 2.5,
        chlorides: 0.08,
        freeSulfurDioxide: 15.0,
        totalSulfurDioxide: 46.5,
        density: 0.999,
        ph: 3.3,
        sulphates: 0.65,
        alcohol: 10.0,
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
